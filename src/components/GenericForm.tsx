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

export default function GenericForm({ fields, submitLabel = 'Enviar', formId }: GenericFormProps) {
  const toast = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsLoading(false)
    toast({
      title: 'Formulário enviado!',
      description: 'Recebemos seus dados e entraremos em contato em breve.',
      status: 'success',
      duration: 5000,
      isClosable: true,
      position: 'top',
    })
    
    // Reset form (optional, requires state management for values if we want to clear inputs)
    const form = e.target as HTMLFormElement
    form.reset()
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

