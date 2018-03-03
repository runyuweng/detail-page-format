
import React from 'react'
import '../assets/index.css';

/**
 * Return react elements.
 *
 * @param {Array} dataStrcut You can format the data by dataStrcut.
 * @param {Object} data The original data.
 */

export default (props) => {
  const {dataStrcut, data, rowStyle={}} = props;
  if (Object.prototype.toString.call(dataStrcut) !== '[object Array]') {
    console.error('Array is needed');
    return
  }
  function formatKey(data, key) {
    if (key.split('.').length > 1) {
      let result = data;
      for (let i = 0; i < key.split('.').length; i++) {
        result = (result || {})[key.split('.')[i]]
      }
      return result
    }
    return data[key]
  }
  return (<div className="detail-page-format" style={props.style}>
    {dataStrcut.map((d, i) => {
      if (d.disabled) {
        return
      }

      const {
        labelCol = 6,
        contentCol = 6
      } = (d.layout || {})

      return (<div key={d.name + i} className="row" style={rowStyle}>
        {
          d.label
          ? <div className={`col col-${labelCol}`} style={{textAlign: 'right'}}>{d.label}</div>
          : null
        }
        {
          d.render
          ? <div className={`col col-${contentCol}`}>{d.render(data[d.name], data, i)}</div>
          : <div className={`col col-${contentCol}`}>{data[d.name]}</div>
        }
      </div>)
    })}
  </div>)
}