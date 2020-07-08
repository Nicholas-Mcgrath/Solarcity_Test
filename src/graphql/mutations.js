/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCity = /* GraphQL */ `
  mutation CreateCity(
    $input: CreateCityInput!
    $condition: ModelCityConditionInput
  ) {
    createCity(input: $input, condition: $condition) {
      id
      name
      dates {
        items {
          id
          date
          CityID
          price
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCity = /* GraphQL */ `
  mutation UpdateCity(
    $input: UpdateCityInput!
    $condition: ModelCityConditionInput
  ) {
    updateCity(input: $input, condition: $condition) {
      id
      name
      dates {
        items {
          id
          date
          CityID
          price
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCity = /* GraphQL */ `
  mutation DeleteCity(
    $input: DeleteCityInput!
    $condition: ModelCityConditionInput
  ) {
    deleteCity(input: $input, condition: $condition) {
      id
      name
      dates {
        items {
          id
          date
          CityID
          price
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createDate = /* GraphQL */ `
  mutation CreateDate(
    $input: CreateDateInput!
    $condition: ModelDateConditionInput
  ) {
    createDate(input: $input, condition: $condition) {
      id
      date
      CityID
      City {
        id
        name
        dates {
          nextToken
        }
        createdAt
        updatedAt
      }
      price
      createdAt
      updatedAt
    }
  }
`;
export const updateDate = /* GraphQL */ `
  mutation UpdateDate(
    $input: UpdateDateInput!
    $condition: ModelDateConditionInput
  ) {
    updateDate(input: $input, condition: $condition) {
      id
      date
      CityID
      City {
        id
        name
        dates {
          nextToken
        }
        createdAt
        updatedAt
      }
      price
      createdAt
      updatedAt
    }
  }
`;
export const deleteDate = /* GraphQL */ `
  mutation DeleteDate(
    $input: DeleteDateInput!
    $condition: ModelDateConditionInput
  ) {
    deleteDate(input: $input, condition: $condition) {
      id
      date
      CityID
      City {
        id
        name
        dates {
          nextToken
        }
        createdAt
        updatedAt
      }
      price
      createdAt
      updatedAt
    }
  }
`;
