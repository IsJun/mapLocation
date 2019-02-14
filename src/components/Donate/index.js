import React, { Component } from 'react'
import {Row, Col, Button, Popover, Icon} from 'antd'
import './index.css'


class Donate extends Component {
  render() {
    return (
      <div className="donate">
        <Popover content={content} title="感谢您的支持！ Thanks for your support!" placement="topRight">
          <Button type="danger" icon="red-envelope" ghost>捐赠 Donate</Button>
        </Popover>
      </div>
    )
  }
}

const content = (
  <div className="donate-content">
    <Row gutter={50}>
      <Col span={8}>
        <p> <img src="/image/paypal.png" alt="paypal QRCode" /> </p>
        <p> <a href="https://www.paypal.me/sjfkai" target="_blank"  rel="noopener noreferrer">Pay for me</a> </p>
      </Col>
      <Col span={8}>
        <img src="/image/code.jpg" alt="wechat QRCode" />
        <br />
        <br />
        <p> 打开微信[扫一扫] </p>
      </Col>
      <Col span={8}>
        <p> <img src="/image/alipay.jpeg" alt="alipay QRCode" /> </p>
        <p> 打开支付宝[扫一扫] </p>
      </Col>
    </Row>
    <div className="new-year"><Icon type="gift" /> 新春快乐！感谢您的支持！打开【支付宝-红包】输入口令：“批量转换地址为经纬度”领红包</div>
  </div>
);

export default Donate
