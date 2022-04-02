import React, { useState, useEffect } from "react";

import { Input, Divider, Checkbox, Row, Col } from "antd";

import MessageBox from "./component/messageBox";
import "./App.css";

const { Search } = Input;
const CheckboxGroup = Checkbox.Group;

function App() {
  const [messageList, setMessageList] = useState([]);
  const [filterMessageList, setFilterMessageList] = useState([]);

  const [checkedList, setCheckedList] = useState([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(true);
  const [plainOptions, setPlainOptions] = useState([]);
  const [kind, setKind] = useState([]);

  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);

    setFilterMessageList(
      messageList.filter((item) => {
        return (
          list.findIndex((k) => {
            return item.tag == k;
          }) >= 0
        );
      })
    );
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);

    setFilterMessageList(messageList);
  };

  const onSearch = (value) => {
    if (value.length > 0) {
      setFilterMessageList(
        messageList.filter((item) => {
          return (
            item.title.includes(value) ||
            item.tag.includes(value) ||
            item.content.includes(value) ||
            item.date.includes(value)
          );
        })
      );
    } else {
      setFilterMessageList(messageList);
    }
  };

  useEffect(() => {
    //Get ......
    const mockMessageList = [
      {
        tag: "新闻",
        title: "在陆续开展了下降利空",
        content: "爱哭的家啊大家思考邻居西欧iv巨蟹座",
        date: "2022-03-14",
      },
      {
        tag: "新闻",
        title: "看下质量差距拉开这些",
        content:
          "毗婆储蓄卡写出来了考阿三大苏打实打实的控制下流程控制邻居西欧iv巨蟹座",
        date: "2022-03-14",
      },
      {
        tag: "讲话",
        title: "在空虚就",
        content:
          "爱车型库v了就重新考撒打算看到了静安寺虑继续哦i考邻居西欧iv巨执行操作细节处理这些课蟹座",
        date: "2022-03-14",
      },
      {
        tag: "讲话",
        title: "在形成被迫i下长坡",
        content:
          "在心里出口集装箱， 家啊大家思考邻居自行车自行车主流科学界处理下自己蠢哭了，阿萨。打什么。达到了空间啊撒旦立刻决定开展立即执行考虑就西欧iv巨蟹座",
        date: "2022-03-14",
      },
      {
        tag: "反腐",
        title: "v形成绿箭侠差旅机械厂屡经现场来看",
        content:
          "阿松大嵩低泡i爱哭的家啊大家思撒大苏打水水多i啊是大家李克强考邻居西欧iv巨蟹座",
        date: "2022-03-14",
      },
      {
        tag: "反腐",
        title: "现场v现场v立刻理科加入了渴望",
        content:
          "爱啊实打实大苏打卡角度来看执行流程控制下之旅快捷键储蓄存款连续进行考虑参加立刻就拉萨看得见拉萨建档立卡离开小镇交叉路口仔细检查了这款相机拉上来看大家阿斯利康大家阿斯利康大家了哭的家啊大家思考邻居西欧iv巨蟹座",
        date: "2022-03-14",
      },
      {
        tag: "反腐",
        title: "自拍从这些噢批判断破i啊苏东坡i阿德破傲四安排的撕破",
        content: "爱阿三大苏打实打实",
        date: "2022-03-14",
      },
    ];

    setMessageList(mockMessageList);
    setFilterMessageList(mockMessageList);

    mockMessageList.forEach((item) => {
      if (
        kind.length == 0 ||
        kind.findIndex((k) => {
          return k == item.tag;
        }) < 0
      ) {
        setKind(kind.push(item.tag));
      }
    });

    setPlainOptions(kind);

    setCheckedList(plainOptions);
  }, []);

  return (
    <div className="App">
      <Row id="head">
        <Col span={4}>
          <Search
            id="search"
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </Col>
        <Col span={1}></Col>
        <Col span={19}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Select all
          </Checkbox>
          <Divider />
          <CheckboxGroup
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </Col>
      </Row>
      <MessageBox messageList={filterMessageList} />
    </div>
  );
}

export default App;
