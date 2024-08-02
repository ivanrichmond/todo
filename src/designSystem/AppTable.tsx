import { 
    Table,
    TableBodyProps,
    TableCellProps,
    TableFooterProps,
    TableHeaderProps,
    TableHeaderCellProps,
    TableRowProps,
    TableProps 
} from 'semantic-ui-react'

export default function AppTable(props: TableProps){
    return (
        <Table {...props} />
    )
}

AppTable.Body = (props: TableBodyProps) => (<Table.Body {...props} />)
AppTable.Cell = (props: TableCellProps) => (<Table.Cell {...props} />)
AppTable.Footer = (props: TableFooterProps) => (<Table.Footer {...props} />)
AppTable.Header = (props: TableHeaderProps) => (<Table.Header {...props} />)
AppTable.HeaderCell = (props: TableHeaderCellProps) => (<Table.HeaderCell {...props} />)
AppTable.Row = (props: TableRowProps) => (<Table.Row {...props} />)