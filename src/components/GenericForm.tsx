'use client'

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Stack,
  useToast,
} from '@chakra-ui/react'
import { useState } from 'react'

export interface FormField {
  name: string
  label: string
  type: 'text' | 'email' | 'tel' | 'select' | 'textarea'
  placeholder?: string
  options?: string[] // For select
  required?: boolean
}

interface GenericFormProps {
  fields: FormField[]
  submitLabel?: string
  formId: string // To identify which form was submitted
}

const WEBHOOK_URL = process.env.NEXT_PUBLIC_FORMS_WEBHOOK_URL

export default function GenericForm({
  fields,
  submitLabel = 'Enviar',
  formId,
}: GenericFormProps) {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const form = e.target as HTMLFormElement
    try {
      if (!WEBHOOK_URL) {
        throw new Error('Webhook não configurado. Defina NEXT_PUBLIC_FORMS_WEBHOOK_URL no .env.')
      }

      const formData = new FormData(form)
      const payload: Record<string, unknown> = { formId }

      formData.forEach((value, key) => {
        // Se o campo já existir, converte para array (caso haja múltiplos valores)
        if (payload[key] !== undefined) {
          const current = payload[key]
          if (Array.isArray(current)) {
            current.push(value)
            payload[key] = current
          } else {
            payload[key] = [current, value]
          }
        } else {
          payload[key] = value
        }
      })

      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`Falha ao enviar formulário. Status: ${response.status}`)
      }

      toast({
        title: 'Formulário enviado!',
        description: 'Recebemos seus dados e entraremos em contato em breve.',
        status: 'success',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })

      form.reset()
    } catch (error) {
      console.error(error)
      toast({
        title: 'Não foi possível enviar o formulário.',
        description: 'Tente novamente em alguns instantes.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Stack as="form" spacing={4} onSubmit={handleSubmit}>
      {fields.map((field) => (
        <FormControl key={field.name} isRequired={field.required}>
          <FormLabel>{field.label}</FormLabel>
          {field.type === 'select' ? (
            <Select name={field.name} placeholder={field.placeholder}>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </Select>
          ) : field.type === 'textarea' ? (
            <Textarea name={field.name} placeholder={field.placeholder} />
          ) : (
            <Input name={field.name} type={field.type} placeholder={field.placeholder} />
          )}
        </FormControl>
      ))}
      <Button
        type="submit"
        colorScheme="brand"
        size="lg"
        width="full"
        isLoading={isLoading}
        loadingText="Enviando..."
      >
        {submitLabel}
      </Button>
    </Stack>
  )
}

