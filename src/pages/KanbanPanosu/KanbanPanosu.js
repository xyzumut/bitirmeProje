import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";
import { KanbanTable } from "../../components/AllComponents";
const initialColumnData = [
    {
        columnName:'ColumnName1',
        ticketGroups:[
            {
                pic:'',
                id:4,
                ticketTags:['update','feature'],
                header:'Ticket Tagleri Güncelleme',
                context:'Ticket Tagleri üzerinde yeni değişiklikler',
                date:'24.10.2022',
                messCount:0
            },
            {
                id:1,
                ticketTags:['bugfix'],
                header:'Ticket Bugfix',
                context:'Ticket tagleri üzerindeki bugfixin çözülmesi',
                date:'24.10.2022',
                messCount:1
            },
        ]
    },
    {
        columnName:'ColumnName2',
        ticketGroups:[
            {
                id:13,
                ticketTags:['update','feature','update','feature'],
                header:'Ticket Tagleri Güncelleme',
                context:'Ticket Tagleri üzerinde yeni değişiklikler',
                date:'24.10.2022',
                messCount:5
            },
        ]
    },
    {
        columnName:'ColumnName3',
        ticketGroups:[
            {
                id:10,
                ticketTags:['feature'],
                header:'Kanban Panosu YenilenmesiKanban Panosu YenilenmesiKanban Panosu Yenilenmesi',
                context:'Kanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesiKanban panosununda yeni içeriklerin eklenmesi',
                date:'24.10.2022',
                messCount:12
            },
        ]
    },
    {
        columnName:'ColumnName4',
        ticketGroups:[],
    },
    {
        columnName:'ColumnName4',
        ticketGroups:[],
    },

]
const KanbanPanosu = () => {
    const [columnData,setColumnData]=useState(initialColumnData)
    const themeItems = useTheme()
    console.log(themeItems)
    return<KanbanTable columnData={columnData}/>
}
export default KanbanPanosu