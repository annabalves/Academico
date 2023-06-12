
const alunosValidator = {
    nome: {
        required: 'O campo é obrigatório',
    minLength: {
      value: 3,
      message: 'A quantidade de caracteres mínima é 3',
    },
    maxLength: {
      value: 50,
      message: 'A quantidade de caracteres máxima é 50',
    },
  },

    cpf: {
        required: 'O campo é obrigatório',
        maxLength: {
            value: 14,
            message: 'A quantidade de caracteres máxima é 14'
        },
        pattern: {
            value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
            message: 'Digite um CPF válido no formato XXX.XXX.XXX-XX',
        },
    },

    matricula: {
        required: 'O campo é obrigatório',
    maxLength: {
      value: 20,
      message: 'A quantidade de caracteres máxima é 20',
    },
  },

    email: {
        required: 'O campo é obrigatório',
    pattern: {
      // Regex para validar endereços de e-mail
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: 'Digite um endereço de e-mail válido',
    },
  },

    telefone: {
        required: 'O campo é obrigatório',
    pattern: {
      // Regex para validar números de telefone
      value: /^\(?\d{2}\)?\s?\d{4,5}\-?\d{4}$/,
      message: 'Digite um número de telefone válido',
    },
  },

    cep: {
        required: 'O campo é obrigatório',
    pattern: {
      // Regex para validar CEP (formato XXXXX-XXX)
      value: /^\d{5}\-\d{3}$/,
      message: 'Digite um CEP válido no formato XXXXX-XXX',
    },
  },

    logradouro: {
        required: 'O campo é obrigatório',
    maxLength: {
      value: 100,
      message: 'A quantidade de caracteres máxima é 100',
    },
  },

    complemento: {
        maxLength: {
            value: 100,
            message: 'A quantidade de caracteres máxima é 100',
          },
        },

    numero: {
        required: 'O campo é obrigatório',
    maxLength: {
      value: 10,
      message: 'A quantidade de caracteres máxima é 10',
    },
  },

    bairro: {
        required: 'O campo é obrigatório',
    maxLength: {
      value: 50,
      message: 'A quantidade de caracteres máxima é 50',
    },
  },
};

export default alunosValidator