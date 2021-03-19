"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(
  require("@babel/runtime/helpers/toConsumableArray")
);

var _objectSpread2 = _interopRequireDefault(
  require("@babel/runtime/helpers/objectSpread")
);

var _classCallCheck2 = _interopRequireDefault(
  require("@babel/runtime/helpers/classCallCheck")
);

var _createClass2 = _interopRequireDefault(
  require("@babel/runtime/helpers/createClass")
);

var _inherits2 = _interopRequireDefault(
  require("@babel/runtime/helpers/inherits")
);

var _possibleConstructorReturn2 = _interopRequireDefault(
  require("@babel/runtime/helpers/possibleConstructorReturn")
);

var _getPrototypeOf2 = _interopRequireDefault(
  require("@babel/runtime/helpers/getPrototypeOf")
);

var _TableBody = _interopRequireDefault(require("@material-ui/core/TableBody"));

var _TableCell = _interopRequireDefault(require("@material-ui/core/TableCell"));

var _TableRow = _interopRequireDefault(require("@material-ui/core/TableRow"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = (0, _getPrototypeOf2["default"])(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return (0, _possibleConstructorReturn2["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

/* eslint-enable no-unused-vars */
var MTableBody = /*#__PURE__*/ (function (_React$Component) {
  (0, _inherits2["default"])(MTableBody, _React$Component);

  var _super = _createSuper(MTableBody);

  function MTableBody() {
    (0, _classCallCheck2["default"])(this, MTableBody);
    return _super.apply(this, arguments);
  }

  (0, _createClass2["default"])(MTableBody, [
    {
      key: "renderEmpty",
      value: function renderEmpty(emptyRowCount, renderData) {
        var _this = this;

        var rowHeight = this.props.options.padding === "default" ? 49 : 36;
        var localization = (0, _objectSpread2["default"])(
          {},
          MTableBody.defaultProps.localization,
          this.props.localization
        );

        if (
          this.props.options.showEmptyDataSourceMessage &&
          renderData.length === 0
        ) {
          var addColumn = 0;

          if (this.props.options.selection) {
            addColumn++;
          }

          if (
            this.props.actions &&
            this.props.actions.filter(function (a) {
              return a.position === "row" || typeof a === "function";
            }).length > 0
          ) {
            addColumn++;
          }

          if (this.props.hasDetailPanel) {
            addColumn++;
          }

          if (this.props.isTreeData) {
            addColumn++;
          }

          return /*#__PURE__*/ React.createElement(
            _TableRow["default"],
            {
              style: {
                height:
                  rowHeight *
                  (this.props.options.paging &&
                  this.props.options.emptyRowsWhenPaging
                    ? this.props.pageSize
                    : 1),
              },
              key: "empty-" + 0,
            },
            /*#__PURE__*/ React.createElement(
              _TableCell["default"],
              {
                style: {
                  paddingTop: 0,
                  paddingBottom: 0,
                  textAlign: "center",
                },
                colSpan: this.props.columns.reduce(function (
                  currentVal,
                  columnDef
                ) {
                  return columnDef.hidden
                    ? currentVal
                    : currentVal +
                        (_this.props.options.draggableRows &&
                        _this.props.options.draggableRowsOptions.draggableCell
                          ? 2
                          : 1);
                },
                addColumn),
                key: "empty-",
              },
              localization.emptyDataSourceMessage
            )
          );
        } else if (this.props.options.emptyRowsWhenPaging) {
          return /*#__PURE__*/ React.createElement(
            React.Fragment,
            null,
            (0, _toConsumableArray2["default"])(Array(emptyRowCount)).map(
              function (r, index) {
                return /*#__PURE__*/ React.createElement(_TableRow["default"], {
                  style: {
                    height: rowHeight,
                  },
                  key: "empty-" + index,
                });
              }
            ),
            emptyRowCount > 0 &&
              /*#__PURE__*/ React.createElement(_TableRow["default"], {
                style: {
                  height: 1,
                },
                key: "empty-last1",
              })
          );
        }
      },
    },
    {
      key: "renderUngroupedRows",
      value: function renderUngroupedRows(renderData) {
        var _this2 = this;

        return renderData.map(function (data, index) {
          if (data.tableData.editing) {
            return /*#__PURE__*/ React.createElement(
              _this2.props.components.EditRow,
              {
                columns: _this2.props.columns.filter(function (columnDef) {
                  return !columnDef.hidden;
                }),
                components: _this2.props.components,
                data: data,
                errorState: _this2.props.errorState,
                icons: _this2.props.icons,
                localization: (0, _objectSpread2["default"])(
                  {},
                  MTableBody.defaultProps.localization.editRow,
                  _this2.props.localization.editRow,
                  {
                    dateTimePickerLocalization:
                      _this2.props.localization.dateTimePickerLocalization,
                  }
                ),
                key: index,
                mode: data.tableData.editing,
                options: _this2.props.options,
                isTreeData: _this2.props.isTreeData,
                detailPanel: _this2.props.detailPanel,
                onEditingCanceled: _this2.props.onEditingCanceled,
                onEditingApproved: _this2.props.onEditingApproved,
                getFieldValue: _this2.props.getFieldValue,
              }
            );
          } else {
            return /*#__PURE__*/ React.createElement(
              _this2.props.components.Row,
              {
                components: _this2.props.components,
                icons: _this2.props.icons,
                data: data,
                index: index,
                errorState: _this2.props.errorState,
                key: "row-" + data.tableData.id,
                level: 0,
                options: _this2.props.options,
                localization: (0, _objectSpread2["default"])(
                  {},
                  MTableBody.defaultProps.localization.editRow,
                  _this2.props.localization.editRow
                ),
                onRowSelected: _this2.props.onRowSelected,
                actions: _this2.props.actions,
                columns: _this2.props.columns,
                getFieldValue: _this2.props.getFieldValue,
                detailPanel: _this2.props.detailPanel,
                path: [
                  index + _this2.props.pageSize * _this2.props.currentPage,
                ],
                onToggleDetailPanel: _this2.props.onToggleDetailPanel,
                onRowClick: _this2.props.onRowClick,
                isTreeData: _this2.props.isTreeData,
                onTreeExpandChanged: _this2.props.onTreeExpandChanged,
                onEditingCanceled: _this2.props.onEditingCanceled,
                onEditingApproved: _this2.props.onEditingApproved,
                hasAnyEditingRow: _this2.props.hasAnyEditingRow,
                treeDataMaxLevel: _this2.props.treeDataMaxLevel,
              }
            );
          }
        });
      },
    },
    {
      key: "renderGroupedRows",
      value: function renderGroupedRows(groups, renderData) {
        var _this3 = this;

        return renderData.map(function (groupData, index) {
          return /*#__PURE__*/ React.createElement(
            _this3.props.components.GroupRow,
            {
              actions: _this3.props.actions,
              key: groupData.value == null ? "" + index : groupData.value,
              columns: _this3.props.columns,
              components: _this3.props.components,
              detailPanel: _this3.props.detailPanel,
              getFieldValue: _this3.props.getFieldValue,
              groupData: groupData,
              groups: groups,
              icons: _this3.props.icons,
              level: 0,
              path: [index + _this3.props.pageSize * _this3.props.currentPage],
              onGroupExpandChanged: _this3.props.onGroupExpandChanged,
              onRowSelected: _this3.props.onRowSelected,
              onRowClick: _this3.props.onRowClick,
              onEditingCanceled: _this3.props.onEditingCanceled,
              onEditingApproved: _this3.props.onEditingApproved,
              onToggleDetailPanel: _this3.props.onToggleDetailPanel,
              onTreeExpandChanged: _this3.props.onTreeExpandChanged,
              options: _this3.props.options,
              isTreeData: _this3.props.isTreeData,
              hasAnyEditingRow: _this3.props.hasAnyEditingRow,
              localization: (0, _objectSpread2["default"])(
                {},
                MTableBody.defaultProps.localization.editRow,
                _this3.props.localization.editRow
              ),
            }
          );
        });
      },
    },
    {
      key: "render",
      value: function render() {
        var _this$props$provided;

        var renderData = this.props.renderData;
        var groups = this.props.columns
          .filter(function (col) {
            return col.tableData.groupOrder > -1;
          })
          .sort(function (col1, col2) {
            return col1.tableData.groupOrder - col2.tableData.groupOrder;
          });
        var emptyRowCount = 0;

        if (this.props.options.paging) {
          emptyRowCount = this.props.pageSize - renderData.length;
        }

        return /*#__PURE__*/ React.createElement(
          _TableBody["default"],
          {
            ref:
              (_this$props$provided = this.props.provided) === null ||
              _this$props$provided === void 0
                ? void 0
                : _this$props$provided.innerRef,
          },
          this.props.options.filtering &&
            /*#__PURE__*/ React.createElement(this.props.components.FilterRow, {
              columns: this.props.columns.filter(function (columnDef) {
                return !columnDef.hidden;
              }),
              icons: this.props.icons,
              hasActions:
                this.props.actions.filter(function (a) {
                  return a.position === "row" || typeof a === "function";
                }).length > 0,
              actionsColumnIndex: this.props.options.actionsColumnIndex,
              onFilterChanged: this.props.onFilterChanged,
              selection: this.props.options.selection,
              draggableCells:
                this.props.options.draggableRows &&
                this.props.options.draggableRowsOptions.draggableCell,
              localization: (0, _objectSpread2["default"])(
                {},
                MTableBody.defaultProps.localization.filterRow,
                this.props.localization.filterRow,
                {
                  dateTimePickerLocalization: this.props.localization
                    .dateTimePickerLocalization,
                }
              ),
              hasDetailPanel: !!this.props.detailPanel,
              isTreeData: this.props.isTreeData,
              filterCellStyle: this.props.options.filterCellStyle,
              filterRowStyle: this.props.options.filterRowStyle,
              hideFilterIcons: this.props.options.hideFilterIcons,
            }),
          this.props.showAddRow &&
            this.props.options.addRowPosition === "first" &&
            /*#__PURE__*/ React.createElement(this.props.components.EditRow, {
              columns: this.props.columns.filter(function (columnDef) {
                return !columnDef.hidden;
              }),
              data: this.props.initialFormData,
              components: this.props.components,
              errorState: this.props.errorState,
              icons: this.props.icons,
              key: "key-add-row",
              mode: "add",
              localization: (0, _objectSpread2["default"])(
                {},
                MTableBody.defaultProps.localization.editRow,
                this.props.localization.editRow
              ),
              options: this.props.options,
              isTreeData: this.props.isTreeData,
              detailPanel: this.props.detailPanel,
              onEditingCanceled: this.props.onEditingCanceled,
              onEditingApproved: this.props.onEditingApproved,
              getFieldValue: this.props.getFieldValue,
            }),
          groups.length > 0
            ? this.renderGroupedRows(groups, renderData)
            : this.renderUngroupedRows(renderData),
          this.props.showAddRow &&
            this.props.options.addRowPosition === "last" &&
            /*#__PURE__*/ React.createElement(this.props.components.EditRow, {
              columns: this.props.columns.filter(function (columnDef) {
                return !columnDef.hidden;
              }),
              data: this.props.initialFormData,
              components: this.props.components,
              errorState: this.props.errorState,
              icons: this.props.icons,
              key: "key-add-row",
              mode: "add",
              localization: (0, _objectSpread2["default"])(
                {},
                MTableBody.defaultProps.localization.editRow,
                this.props.localization.editRow
              ),
              options: this.props.options,
              isTreeData: this.props.isTreeData,
              detailPanel: this.props.detailPanel,
              onEditingCanceled: this.props.onEditingCanceled,
              onEditingApproved: this.props.onEditingApproved,
              getFieldValue: this.props.getFieldValue,
            }),
          this.renderEmpty(emptyRowCount, renderData),
          this.props.provided.placeholder
        );
      },
    },
  ]);
  return MTableBody;
})(React.Component);

MTableBody.defaultProps = {
  actions: [],
  currentPage: 0,
  pageSize: 5,
  renderData: [],
  selection: false,
  localization: {
    emptyDataSourceMessage: "No records to display",
    filterRow: {},
    editRow: {},
  },
};
MTableBody.propTypes = {
  actions: _propTypes["default"].array,
  components: _propTypes["default"].object.isRequired,
  columns: _propTypes["default"].array.isRequired,
  currentPage: _propTypes["default"].number,
  detailPanel: _propTypes["default"].oneOfType([
    _propTypes["default"].func,
    _propTypes["default"].arrayOf(
      _propTypes["default"].oneOfType([
        _propTypes["default"].object,
        _propTypes["default"].func,
      ])
    ),
  ]),
  getFieldValue: _propTypes["default"].func.isRequired,
  hasAnyEditingRow: _propTypes["default"].bool,
  hasDetailPanel: _propTypes["default"].bool.isRequired,
  icons: _propTypes["default"].object.isRequired,
  isTreeData: _propTypes["default"].bool.isRequired,
  onRowSelected: _propTypes["default"].func,
  options: _propTypes["default"].object.isRequired,
  pageSize: _propTypes["default"].number,
  renderData: _propTypes["default"].array,
  initialFormData: _propTypes["default"].object,
  selection: _propTypes["default"].bool.isRequired,
  showAddRow: _propTypes["default"].bool,
  treeDataMaxLevel: _propTypes["default"].number,
  localization: _propTypes["default"].object,
  onFilterChanged: _propTypes["default"].func,
  onGroupExpandChanged: _propTypes["default"].func,
  onToggleDetailPanel: _propTypes["default"].func.isRequired,
  onTreeExpandChanged: _propTypes["default"].func.isRequired,
  onRowClick: _propTypes["default"].func,
  onEditingCanceled: _propTypes["default"].func,
  onEditingApproved: _propTypes["default"].func,
  provided: _propTypes["default"].object,
  errorState: _propTypes["default"].oneOfType([
    _propTypes["default"].object,
    _propTypes["default"].bool,
  ]),
};
var _default = MTableBody;
exports["default"] = _default;
