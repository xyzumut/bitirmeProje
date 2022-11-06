import React, { useState } from "react";
import styled from "styled-components";
import KanbanTable from "../../components/kanban/KanbanTable";
import { useTheme } from "../../context/ThemeContext";
const initialColumnData = [
    {
        columnName:'ColumnName1',
        ticketGroups:[['bugfix','feature'],['feature']]
    },
    {
        columnName:'ColumnName2',
        ticketGroups:[['bugfix','feature']]
    },
    {
        columnName:'ColumnName3',
        ticketGroups:[['bugfix'],['update','feature','bugfix']]
    },
    {
        columnName:'ColumnName4',
        ticketGroups:[['feauture']]
    }
]


const KanbanPanosu = () => {
    const [columnData,setColumnData]=useState(initialColumnData)
    const themeItems = useTheme()
    console.log(themeItems)
    return<KanbanTable columnData={columnData}></KanbanTable>
}
export default KanbanPanosu
/* ColumnData Formatı
const initialColumnData = [
    {
        columnName:'ColumnName1',
        ticketGroups:[['bugfix','feature'],['feature']]
    },
    {
        columnName:'ColumnName2',
        ticketGroups:[['bugfix','feature']]
    },
    {
        columnName:'ColumnName3',
        ticketGroups:[['bugfix'],['update','feature']]
    }
]
*/