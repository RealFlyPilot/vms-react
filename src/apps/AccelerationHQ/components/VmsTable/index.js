import React from 'react'
import MaterialTable from 'material-table'

export const VmsTable = () => {
  return (
    <MaterialTable
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Surname', field: 'surname' },
        { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
        {
          title: 'Birth Place',
          field: 'birthCity',
          lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }
        }
      ]}
      data={[]}
      title='Empty DataSource Example'
      options={{
        paging: true,
        showEmptyDataSourceMessage: true
      }}
      localization={{
        body: {
          emptyDataSourceMessage: 'No records to display'
        }
      }}
    />
  )
}
