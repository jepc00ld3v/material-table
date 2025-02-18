import {
  Grid,
  MuiThemeProvider,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  Button,
} from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "../src";
import Typography from "@material-ui/core/Typography";

let direction = "ltr";
// direction = 'rtl';
const theme = createMuiTheme({
  direction: direction,
  palette: {
    type: "light",
  },
});

const bigData = [];
for (let i = 0; i < 1; i++) {
  const d = {
    id: i + 1,
    name: "Name" + i,
    surname: "Surname" + Math.round(i / 10),
    isMarried: i % 2 ? true : false,
    birthDate: new Date(1987, 1, 1),
    birthCity: 0,
    sex: i % 2 ? "Male" : "Female",
    type: "adult",
    insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
    time: new Date(1900, 1, 1, 14, 23, 35),
  };
  bigData.push(d);
}

class App extends Component {
  tableRef = React.createRef();
  remoteDataTableRef = React.createRef();

  colRenderCount = 0;

  state = {
    text: "text",
    selecteds: 0,
    data: [
      {
        id: 1,
        name: "A1",
        surname: "B",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 0,
        sex: "Male",
        type: "adult",
        insertDateTime: "1994-11-23T08:15:30-05:00",
        time: new Date(1900, 1, 1, 14, 23, 35),
      },
      {
        id: 2,
        name: "A2",
        surname: "B",
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "adult",
        insertDateTime: "1994-11-05T13:15:30Z",
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1,
      },
      {
        id: 3,
        name: "A3",
        surname: "B",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1,
      },
      {
        id: 4,
        name: "A4",
        surname: "Dede Dede Dede Dede Dede Dede Dede Dede",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 3,
      },
      {
        id: 5,
        name: "A5",
        surname: "C",
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
      },
      {
        id: 6,
        name: "A6",
        surname: "C",
        isMarried: true,
        birthDate: new Date(1989, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 5,
      },
      {
        id: 11,
        name: "A1",
        surname: "B",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 0,
        sex: "Male",
        type: "adult",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
      },
      {
        id: 21,
        name: "A2",
        surname: "B",
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "adult",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1,
      },
      {
        id: 31,
        name: "A3",
        surname: "B",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1,
      },
      {
        id: 41,
        name: "A4",
        surname: "Dede",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 3,
      },
      {
        id: 51,
        name: "A5",
        surname: "C",
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
      },
      {
        id: 61,
        name: "A6",
        surname: "C",
        isMarried: true,
        birthDate: new Date(1989, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 5,
      },
      {
        id: 12,
        name: "A1",
        surname: "B",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 0,
        sex: "Male",
        type: "adult",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
      },
      {
        id: 22,
        name: "A2",
        surname: "B",
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "adult",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1,
      },
      {
        id: 32,
        name: "A3",
        surname: "B",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1,
      },
      {
        id: 42,
        name: "A4",
        surname: "Dede",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 3,
      },
      {
        id: 52,
        name: "A5",
        surname: "C",
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
      },
      {
        id: 62,
        name: "A6",
        surname: "C",
        isMarried: true,
        birthDate: new Date(1989, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 5,
      },
      {
        id: 13,
        name: "A1",
        surname: "B",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 0,
        sex: "Male",
        type: "adult",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
      },
      {
        id: 23,
        name: "A2",
        surname: "B",
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "adult",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1,
      },
      {
        id: 33,
        name: "A3",
        surname: "B",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1,
      },
      {
        id: 43,
        name: "A4",
        surname: "Dede",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 3,
      },
      {
        id: 53,
        name: "A5",
        surname: "C",
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
      },
      {
        id: 63,
        name: "A6",
        surname: "C",
        isMarried: true,
        birthDate: new Date(1989, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 5,
      },
      {
        id: 14,
        name: "A1",
        surname: "B",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 0,
        sex: "Male",
        type: "adult",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
      },
      {
        id: 24,
        name: "A2",
        surname: "B",
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "adult",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1,
      },
      {
        id: 34,
        name: "A3",
        surname: "B",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 1,
      },
      {
        id: 44,
        name: "A4",
        surname: "Dede",
        isMarried: true,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 3,
      },
      {
        id: 54,
        name: "A5",
        surname: "C",
        isMarried: false,
        birthDate: new Date(1987, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
      },
      {
        id: 64,
        name: "A6",
        surname: "C",
        isMarried: true,
        birthDate: new Date(1989, 1, 1),
        birthCity: 34,
        sex: "Female",
        type: "child",
        insertDateTime: new Date(2018, 1, 1, 12, 23, 44),
        time: new Date(1900, 1, 1, 14, 23, 35),
        parentId: 5,
      },
    ],
    columns: [
      {
        title: "Adı",
        field: "name",
        filterPlaceholder: "Adı filter",
        tooltip: "This is tooltip text",
        editPlaceholder: "This is placeholder",
      },
      {
        width: 200,
        title: "Soyadı",
        field: "surname",
        initialEditValue: "test",
        tooltip: "This is tooltip text",
      },
      { title: "Evli", field: "isMarried" },
      {
        title: "Cinsiyet",
        field: "sex",
        disableClick: true,
        editable: "onAdd",
      },
      { title: "Tipi", field: "type", removable: false, editable: "never" },
      { title: "Doğum Yılı", field: "birthDate", type: "date" },
      {
        title: "Doğum Yeri",
        field: "birthCity",
        lookup: { 34: "İstanbul", 0: "Şanlıurfa" },
      },
      { title: "Kayıt Tarihi", field: "insertDateTime", type: "datetime" },
      { title: "Zaman", field: "time", type: "time" },
      {
        title: "Adı",
        field: "name",
        filterPlaceholder: "Adı filter",
        tooltip: "This is tooltip text",
      },
    ],
    remoteColumns: [
      {
        title: "Avatar",
        field: "avatar",
        render: (rowData) => (
          <img
            style={{ height: 36, borderRadius: "50%" }}
            src={rowData.avatar}
          />
        ),
        tooltip: "delakjdslkjdaskljklsdaj",
      },
      { title: "Id", field: "id" },
      { title: "First Name", field: "first_name", defaultFilter: "De" },
      { title: "Last Name", field: "last_name" },
    ],
    dragOption: "disabled",
    remoteDataOrder: [],
  };

  resetDataOrder = (data) => {
    this.state.remoteDataOrder = [];
    data.forEach((el) => this.state.remoteDataOrder.push(el.id));
  };

  reorderData = (data) => {
    return data.sort((a, b) => {
      const aPos = this.state.remoteDataOrder.indexOf(a.id);
      const bPos = this.state.remoteDataOrder.indexOf(b.id);

      return aPos === -1 ? 1 : bPos === -1 ? 1 : aPos - bPos;
    });
  };

  render() {
    return (
      <>
        <MuiThemeProvider theme={theme}>
          <div style={{ maxWidth: "100%", direction }}>
            <Grid container>
              <Grid item xs={12}>
                {this.state.selectedRows && this.state.selectedRows.length}
                <MaterialTable
                  tableRef={this.tableRef}
                  columns={this.state.columns}
                  data={this.state.data}
                  title="Demo Title"
                  onFilterChange={(appliedFilter) => {
                    console.log("selected Filters : ", appliedFilter);
                  }}
                  options={{
                    headerSelectionProps: {
                      color: "primary",
                    },
                    selection: true,
                    selectionProps: (rowData) => {
                      rowData.tableData.disabled = rowData.name === "A1";

                      return {
                        disabled: rowData.name === "A1",
                        color: "primary",
                      };
                    },
                  }}
                  editable={{
                    onRowAdd: (newData) =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          {
                            /* const data = this.state.data;
                            data.push(newData);
                            this.setState({ data }, () => resolve()); */
                          }
                          resolve();
                        }, 1000);
                      }),
                    onRowUpdate: (newData, oldData) =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          {
                            /* const data = this.state.data;
                            const index = data.indexOf(oldData);
                            data[index] = newData;
                            this.setState({ data }, () => resolve()); */
                          }
                          resolve();
                        }, 1000);
                      }),
                    onRowDelete: (oldData) =>
                      new Promise((resolve, reject) => {
                        setTimeout(() => {
                          {
                            /* let data = this.state.data;
                            const index = data.indexOf(oldData);
                            data.splice(index, 1);
                            this.setState({ data }, () => resolve()); */
                          }
                          resolve();
                        }, 1000);
                      }),
                  }}
                  localization={{
                    body: {
                      emptyDataSourceMessage: "No records to display",
                      filterRow: {
                        filterTooltip: "Filter",
                        filterPlaceHolder: "Filtaaer",
                      },
                    },
                  }}
                  onSearchChange={(e) => console.log("search changed: " + e)}
                  onColumnDragged={(oldPos, newPos) =>
                    console.log(
                      "Dropped column from " + oldPos + " to position " + newPos
                    )
                  }
                  // parentChildData={(row, rows) => rows.find(a => a.id === row.parentId)}
                />
              </Grid>
            </Grid>
            {this.state.text}
            <button
              onClick={() => this.tableRef.current.onAllSelected(true)}
              style={{ margin: 10 }}
            >
              Select
            </button>
            <MaterialTable
              tableRef={this.remoteDataTableRef}
              title={
                <>
                  <Typography variant="h6" color="primary">
                    Remote Data Preview
                  </Typography>
                  <FormControl>
                    <Select
                      defaultValue="disable"
                      onChange={(event) => {
                        this.setState({ dragOption: event.target.value });
                      }}
                    >
                      <MenuItem value="disable">No Drag</MenuItem>
                      <MenuItem value="columns">Draggable columns</MenuItem>
                      <MenuItem value="row">Draggable Row</MenuItem>
                      <MenuItem value="cell">Draggable Cell</MenuItem>
                    </Select>
                    <FormHelperText>Drag Options</FormHelperText>
                  </FormControl>
                </>
              }
              columns={[
                {
                  title: "Avatar",
                  field: "avatar",
                  render: (rowData) => (
                    <img
                      style={{ height: 36, borderRadius: "50%" }}
                      src={rowData.avatar}
                    />
                  ),
                },
                {
                  title: "Id",
                  field: "id",
                  filterOnItemSelect: true,
                  filterPlaceholder: "placeholder",
                  lookup: {
                    1: "1",
                    2: "2",
                    3: "3",
                    4: "4",
                    5: "5",
                    6: "6",
                    7: "7",
                    8: "8",
                    9: "9",
                    10: "10",
                    11: "11",
                    12: "12",
                  },
                },
                { title: "First Name", field: "first_name" },
                { title: "Last Name", field: "last_name" },
              ]}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        /* const data = this.state.data;
                        data.push(newData);
                        this.setState({ data }, () => resolve()); */
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        /* const data = this.state.data;
                        const index = data.indexOf(oldData);
                        data[index] = newData;
                        this.setState({ data }, () => resolve()); */
                      }
                      resolve();
                    }, 1000);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve, reject) => {
                    setTimeout(() => {
                      {
                        /* let data = this.state.data;
                        const index = data.indexOf(oldData);
                        data.splice(index, 1);
                        this.setState({ data }, () => resolve()); */
                      }
                      resolve();
                    }, 1000);
                  }),
              }}
              options={{
                actionsColumnIndex: -1,
                filtering: true,
                grouping: true,
                groupTitle: (group) => group.data.length,
                searchFieldVariant: "outlined",
                draggable: this.state.dragOption === "columns",
                draggableRows:
                  this.state.dragOption === "cell" ||
                  this.state.dragOption === "row",
                draggableColumnIndex: "id",
                draggableRowsOptions: {
                  draggableCell: this.state.dragOption === "cell",
                  dragCellContent: "=",
                  dragCellWidth: "40px",
                },
              }}
              localization={{
                toolbar: {
                  searchPlaceholder: "Outlined Search Field",
                },
              }}
              data={this.state.data}
              onRowDrop={(result) => {
                console.log(result);
                this.state.remoteDataOrder.splice(
                  result.destination.index,
                  0,
                  this.state.remoteDataOrder.splice(result.source.index, 1)[0]
                );
                const dataManager = this.remoteDataTableRef.current.dataManager;
                dataManager.setData(this.reorderData(dataManager.data));
              }}
            />
          </div>
        </MuiThemeProvider>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
