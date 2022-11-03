import React, { useState } from "react";
import Kanban from "../../components/kanban/Kanban";

const initialColumnData = [
    {
        columnName:'ColumnName1',
        cellTags:[['bugfix','feature'],['feature']]
    },
    {
        columnName:'ColumnName2',
        cellTags:[['bugfix','feature']]
    },
    {
        columnName:'ColumnName3',
        cellTags:[['bugfix'],['update','feature','bugfix']]
    },
    {
        columnName:'ColumnName4',
    }
]

const KanbanPanosu = () => {
    const [columnData,setColumnData]=useState(initialColumnData)

    return(
        <>
            <Kanban columnData={columnData}></Kanban>
        </>
    )
}
export default KanbanPanosu
/* ColumnData Formatı
const initialColumnData = [
    {
        columnName:'ColumnName1',
        tagGroups:[['bugfix','feature'],['feature']]
    },
    {
        columnName:'ColumnName2',
        tagGroups:[['bugfix','feature']]
    },
    {
        columnName:'ColumnName3',
        tagGroups:[['bugfix'],['update','feature']]
    }
]
*/