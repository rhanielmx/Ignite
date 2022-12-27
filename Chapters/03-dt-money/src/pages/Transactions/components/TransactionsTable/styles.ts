import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  ul {
    display: flex;
    width: fit-content;
    gap: 0.5rem;
    list-style: none;

    li {
      height: 40px;
      width: 40px;

      .next {
        background-color: ${(props) => props.theme.white};
      }

      a {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;

        width: 100%;
        height: 100%;

        background-color: ${(props) => props.theme['gray-600']};

        &:hover {
          cursor: pointer;
        }

        &[aria-disabled='false'] {
          color: ${(props) => props.theme['green-500']};
        }

        &[aria-disabled='true'] {
          color: ${(props) => props.theme['gray-600']};
          cursor: not-allowed;
        }

        &[aria-current='page'] {
          background-color: ${(props) => props.theme['green-700']};
        }

        &[aria-label='Previous page'],
        &[aria-label='Next page'] {
          background-color: transparent;
        }
      }

      color: ${(props) => props.theme.white};
    }
  }

  /* a:not([role='button']) {
    display: block;
  } */
`

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`
interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-500']
      : props.theme['red-500']};
`
