/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCity = /* GraphQL */ `
  query GetCity($id: ID!) {
    getCity(id: $id) {
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
export const listCitys = /* GraphQL */ `
  query ListCitys(
    $filter: ModelCityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        dates {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDate = /* GraphQL */ `
  query GetDate($id: ID!) {
    getDate(id: $id) {
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
export const listDates = /* GraphQL */ `
  query ListDates(
    $filter: ModelDateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        date
        CityID
        City {
          id
          name
          createdAt
          updatedAt
        }
        price
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
