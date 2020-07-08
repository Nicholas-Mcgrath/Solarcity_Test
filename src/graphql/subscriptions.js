/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCity = /* GraphQL */ `
  subscription OnCreateCity {
    onCreateCity {
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
export const onUpdateCity = /* GraphQL */ `
  subscription OnUpdateCity {
    onUpdateCity {
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
export const onDeleteCity = /* GraphQL */ `
  subscription OnDeleteCity {
    onDeleteCity {
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
export const onCreateDate = /* GraphQL */ `
  subscription OnCreateDate {
    onCreateDate {
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
export const onUpdateDate = /* GraphQL */ `
  subscription OnUpdateDate {
    onUpdateDate {
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
export const onDeleteDate = /* GraphQL */ `
  subscription OnDeleteDate {
    onDeleteDate {
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
