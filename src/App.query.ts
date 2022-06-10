import { gql } from '@apollo/client';

export const CONTINENT_DATA = gql`
query GetContinentData($code: ID!) {
  continent(code: $code) {
    name
    code
    countries {
      name 
      currency
      capital
      languages {
        name
      }
    }
  }
}`;