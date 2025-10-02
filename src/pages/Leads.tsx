import { useEffect, useState, type ChangeEvent } from 'react'
import {
  CardComponent,
  Header,
  StyledH2,
  StyledP,
  StyledSpan,
  FormComponent,
  CustomTable,
  StyledButton,
} from '@components'
import { Container, Grid } from '@mui/material'
import type { InputProps, LeadData, LeadPostData, MessageProps } from '@types'
import { useFormValidation, useGet, useDelete } from '@hooks'
import { usePost } from '@hooks'

function Leads() {
  const {
    data: createLeadData,
    loading: createLeadLoading,
    error: createLeadError,
    postData: createLeadPostData,
  } = usePost<LeadData, LeadPostData>('leads/create', true)

  const {
    data: leadsData,
    loading: leadsLoading,
    error: leadsError,
    getData: getLeads,
  } = useGet<LeadData[]>('leads')

  const { deleteData: leadDeleteData, loading: leadDeleteLoading } =
    useDelete('leads/delete')

  const inputs: InputProps[] = [
    { name: 'name', type: 'text', placeholder: 'Name', required: true },
    { name: 'email', type: 'email', placeholder: 'Email', required: true },
    { name: 'phone', type: 'tel', placeholder: 'Phone number', required: true },
  ]

  const { formValues, formValid, handleChange } = useFormValidation(inputs)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await createLeadPostData({
      name: String(formValues[0]),
      email: String(formValues[1]),
      phone: String(formValues[2]),
    })
  }

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this lead?')) {
      try {
        await leadDeleteData({ params: { id } })
        alert('Lead deleted successfully!')
        getLeads()
      } catch (error) {
        alert(
          'We could not complete the operation. If the problem persists, contact our support team.'
        )
      }
    }
  }

  useEffect(() => {
    if (createLeadData?.id) {
      setCreateMessage({
        type: 'success',
        msg: 'lead created successfully',
      })
      getLeads()
    }

    if (createLeadError)
      setCreateMessage({
        type: 'error',
        msg: 'We could not complete the operation. If the problem persists, contact our support team.',
      })

    clearMessage()
  }, [createLeadData, createLeadError])

  const [createMessage, setCreateMessage] = useState<MessageProps>({
    type: 'success',
    msg: '',
  })

  const clearMessage = () =>
    setTimeout(
      () =>
        setCreateMessage({
          type: 'success',
          msg: '',
        }),
      4000
    )

  return (
    <>
      <Header />
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7}>
            <CardComponent
              id="leads-card"
              className={
                leadsLoading ? 'skeleton-loading skeleton-loading-mh-2' : ''
              }
            >
              {!leadsError && !leadsLoading && (
                <>
                  <StyledH2 className="mb-1">My Leads</StyledH2>
                  {leadsData?.length ? (
                    <CustomTable
                      headers={['Name', 'Email', 'Phone', '']}
                      rows={leadsData.map(lead => [
                        <StyledP>{lead.name}</StyledP>,
                        <StyledP>{lead.email}</StyledP>,
                        <StyledP>{lead.phone}</StyledP>,
                        <StyledButton
                          className="borderless-alert"
                          onClick={() => handleDelete(lead.id)}
                          disabled={leadDeleteLoading}
                        >
                          Remove
                        </StyledButton>,
                      ])}
                    />
                  ) : (
                    <StyledSpan>No registered leads</StyledSpan>
                  )}
                </>
              )}
            </CardComponent>
          </Grid>
          <Grid item xs={12} sm={5}>
            <CardComponent>
              <StyledH2 className="mb-1">Register Lead</StyledH2>
              <FormComponent
                inputs={inputs.map((input, index) => ({
                  ...input,
                  type: input.type,
                  placeholder: input.placeholder,
                  value: formValues[index] || '',
                  onChange: (e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, (e.target as HTMLInputElement).value),
                }))}
                buttons={[
                  {
                    id: 'add-lead',
                    className: 'primary',
                    disabled:
                      !formValid || createLeadLoading || leadDeleteLoading,
                    type: 'submit',
                    children: 'Add Lead',
                    onClick: handleSubmit,
                  },
                ]}
                message={createMessage}
              />
            </CardComponent>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Leads
