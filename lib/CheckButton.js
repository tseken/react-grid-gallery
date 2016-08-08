"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckButton = function (_Component) {
    _inherits(CheckButton, _Component);

    function CheckButton(props) {
        _classCallCheck(this, CheckButton);

        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CheckButton).call(this, props));

        _this.state = {
            isSelected: _this.props.isSelected,
            visibility: _this.props.visibility,
            hover: _this.props.hover,
            onClick: _this.props.onClick
        };

        _this.toggleIsSelected = _this.toggleIsSelected.bind(_this);
        _this.fill = _this.fill.bind(_this);
        _this.onMouseOver = _this.onMouseOver.bind(_this);
        _this.onMouseOut = _this.onMouseOut.bind(_this);
        return _this;
    }

    _createClass(CheckButton, [{
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(np) {
            if (!this.state.isSelected) this.setState({ visibility: np.visibility });
        }
    }, {
        key: "componentWillUpdate",
        value: function componentWillUpdate(np, ns) {
            if (ns.isSelected != this.state.isSelected) {
                this.props.onClick(ns.isSelected);
            }
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(oProps, nProps) {}
    }, {
        key: "toggleIsSelected",
        value: function toggleIsSelected() {
            this.setState({ isSelected: !this.state.isSelected });
        }
    }, {
        key: "fill",
        value: function fill() {
            if (this.state.isSelected) return "#4285f4";else if (this.state.hover) return "rgba(255, 255, 255, 1)";
            return "rgba(255, 255, 255, 0.7)";
        }
    }, {
        key: "svgBackgroundState",
        value: function svgBackgroundState() {
            if (this.state.isSelected) return "block";
            return "none";
        }
    }, {
        key: "onMouseOver",
        value: function onMouseOver() {
            this.setState({ hover: true });
        }
    }, {
        key: "onMouseOut",
        value: function onMouseOut() {
            this.setState({ hover: false });
        }
    }, {
        key: "render",
        value: function render() {
            var circleStyle = {
                display: this.svgBackgroundState()
            };

            return _react2.default.createElement(
                "div",
                {
                    title: "Select",
                    style: {
                        visibility: this.state.visibility,
                        background: 'none',
                        width: '36px',
                        height: '36px',
                        border: 'none',
                        padding: '6px'
                    },
                    onClick: this.toggleIsSelected,
                    onMouseOver: this.onMouseOver,
                    onMouseOut: this.onMouseOut },
                _react2.default.createElement(
                    "svg",
                    {
                        fill: this.fill(),
                        height: "24", viewBox: "0 0 24 24",
                        width: "24",
                        xmlns: "http://www.w3.org/2000/svg" },
                    _react2.default.createElement(
                        "radialGradient",
                        {
                            id: "shadow",
                            cx: "38",
                            cy: "95.488",
                            r: "10.488",
                            gradientTransform: "matrix(1 0 0 -1 -26 109)",
                            gradientUnits: "userSpaceOnUse" },
                        _react2.default.createElement("stop", {
                            offset: ".832",
                            stopColor: "#010101" }),
                        _react2.default.createElement("stop", {
                            offset: "1",
                            stopColor: "#010101",
                            stopOpacity: "0" })
                    ),
                    _react2.default.createElement("circle", {
                        style: circleStyle,
                        opacity: ".26",
                        fill: "url(#shadow)",
                        cx: "12", cy: "13.512",
                        r: "10.488" }),
                    _react2.default.createElement("circle", {
                        style: circleStyle,
                        fill: "#FFF",
                        cx: "12",
                        cy: "12.2",
                        r: "8.292" }),
                    _react2.default.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
                    _react2.default.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" })
                )
            );
        }
    }]);

    return CheckButton;
}(_react.Component);

CheckButton.propTypes = { isSelected: _react2.default.PropTypes.bool,
    visibility: _react2.default.PropTypes.string,
    hover: _react2.default.PropTypes.bool,
    onClick: _react2.default.PropTypes.func };
CheckButton.defaultProps = { isSelected: false,
    visibility: 'hidden',
    hover: false };

exports.default = CheckButton;