let questions = [
  {
    stem: "为了增强抵抗病毒的免疫力",
    options: [{
      content: "肉蛋熟食，多吃果蔬",
      immuneNum: 1,
      protectNum: 0,
      loveNum: 0,
      moodNum: 3,
      imageUrl: '../../doc/images/6.1.png'
    },
    {
      content: "多吃抗生素",
      immuneNum: -1.5,
      protectNum: 0,
      loveNum: 0,
      moodNum: 0,
      imageUrl: '../../doc/images/6.2.png'
    }
    ],
    img: "../../doc/images/6.png",
  },
  {
    stem: "药店酒精都卖光了，我可怎么办。咦，老舅年前带了一瓶96伏特加",
    options: [{
      content: "好嗨呦，直接拿来消毒呗",
      immuneNum: 0,
      protectNum: -1,
      loveNum: 0,
      moodNum: 2,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/2.1.png'
    },
    {
      content: "听说75%酒精最管用，还是兑点水吧",
      immuneNum: 0,
      protectNum: 1,
      loveNum: 0,
      moodNum: -1,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/2.2.png'
    }
    ],
    img: "../../doc/images/2.png",
  },
  {
    stem: "有一个紧急多人现场会议需要召开，怎么办",
    options: [{
      content: "生命诚可贵，不开才安心",
      immuneNum: 1,
      protectNum: 1,
      loveNum: -1,
      moodNum: 2,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/3.1.png'
    },
    {
      content: "都2020了，线上会议它不香吗",
      immuneNum: 1,
      protectNum: 1,
      loveNum: 1,
      moodNum: -1,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/3.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/3.png",
  },
  {
    stem: "我旁边的同事出现了咳嗽症状，该怎么办",
    options: [{
      content: "让他咳嗽、打喷嚏用胳膊肘遮住口鼻",
      immuneNum: 0,
      protectNum: 1,
      loveNum: 1,
      moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/4.1.png'
    },
    {
      content: "我戴好防护口罩，离他至少一米远",
      immuneNum: 0,
      protectNum: 1,
      loveNum: -1,
      moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/4.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/4.png",
  },
  {
    stem: "疫情期间，若想要办理华夏保险承保、保全等业务",
    options: [{
      content: "去柜台找专业的小姐姐办理",
      immuneNum: 0,
      protectNum: -1,
      loveNum: -1,
      moodNum: 2,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/5.1.png'
    },
    {
      content: "动动手指官微自助办理",
      immuneNum: 0,
      protectNum: 1,
      loveNum: 1,
      moodNum: 3,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/5.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/5.png",
  },
  {
    stem: "爸妈在家熏醋，这味道真酸爽",
    options: [{
      content: "听说熏醋能杀毒，忍一忍吧",
      immuneNum: 0,
      protectNum: -2,
      loveNum: -1,
      moodNum: -1,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/1.1.png'

    }, {
      content: "太刺鼻了，消停消停吧",
      immuneNum: 1,
      protectNum: 1,
      loveNum: 1,
      moodNum: 2,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/1.2.png'
    }],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/1.png",
  },
  {
    stem: "早上测量体温超 37.5 度，但自我感觉良好，糟糕了，上班快迟到了",
    options: [{
      content: "和老板请假叭",
      immuneNum: 1,
      protectNum: 1,
      loveNum: 1,
      moodNum: -1,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/8.1.png'
    },
    {
      content: "我爱工作，工作使我快乐",
      immuneNum: -2,
      protectNum: -2,
      loveNum: -1,
      moodNum: 2,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/8.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/8.png",
  },
  {
    stem: "钟老说了，病毒可能通过粪口传播，来给马桶也消消毒吧",
    options: [{
      content: "洁厕灵和84消毒水混合使用，一定威力无比",
      immuneNum: -2,
      protectNum: -2,
      loveNum: -1,
      moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/9.1.png'
    },
    {
      content: "先用洁厕灵，再上84消毒水",
      immuneNum: 1,
      protectNum: 1,
      loveNum: 1,
      moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/9.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/9.png",
  },
  {
    stem: "疫情期间为了保持健康的生活状态",
    options: [{
      content: "坚持户外慢跑，提升心肺功能",
      immuneNum: 1,
      protectNum: -2,
      loveNum: -2,
      moodNum: 1,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/16.1.png'
    },
    {
      content: "还是宅在家，早睡早起",
      immuneNum: 1,
      protectNum: 1,
      loveNum: 1,
      moodNum: 2,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/16.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/16.png",
  },
  {
    stem: "前面这盘野味看起来好美味啊，口水都在流了，你会__",
    options: [{
      content: "嗯，真香",
      immuneNum: -3,
      protectNum: -2,
      loveNum: -2,
      moodNum: 2,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/12.1.png'
    },
    {
      content: "不，我不饿",
      immuneNum: 1,
      protectNum: 1,
      loveNum: 1,
      moodNum: -1,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/12.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/12.png",
  },
  {
    stem: "这家药店居然还有这么多双黄连",
    options: [{
      content: "还是买瓶维生素保障免疫力吧",
      immuneNum: 1,
      protectNum: 0,
      loveNum: 0,
      moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/13.1.png'
    },
    {
      content: "OMG，买它",
      immuneNum: 0,
      protectNum: 0,
      loveNum: 0,
      moodNum: 2,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/13.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/13.png",
  },
  {
    stem: "听说华夏保险推出了针对新冠的守护保保险计划",
    options: [{
      content: "奥利给，我要来一份",
      immuneNum: 1,
      protectNum: 1,
      loveNum: 1,
      moodNum: 3,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/14.1.png'
    },
    {
      content: "我才不要，我不会感染",
      immuneNum: -2,
      protectNum: -2,
      loveNum: -2,
      moodNum: -1,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/14.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/14.png",
  },
  {
    stem: "李兰娟院士说56°C持续30分钟可以杀毒，那我来给衣服消消毒",
    options: [{
      content: "用挂烫机熨一熨，我真是小天才",
      immuneNum: 0,
      protectNum: -2,
      loveNum: 0,
      moodNum: 2,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/15.1.png'
    },
    {
      content: "还是用勾兑消毒液洗一洗来得快",
      immuneNum: 0,
      protectNum: 1,
      loveNum: 0,
      moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/15.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/15.png",
  },
  {
    stem: "我太南了，口罩都变形了",
    options: [{
      content: "由内向外折好，丢入黄色垃圾桶",
      immuneNum: 0,
      protectNum: -2,
      loveNum: -1,
      moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/10.1.png'
    },
    {
      content: "由内向外折好，丢入红色垃圾桶",
      immuneNum: 0,
      protectNum: 1,
      loveNum: 1,
      moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/10.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/10.png",
  },
  {
    stem: "复工返程好累呀，到家了先来个葛优躺",
    options: [{
      content: "嗯，养好精神才能与病毒抗争",
      immuneNum: -2,
      protectNum: -1,
      loveNum: -2,
      moodNum: 2,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/17.1.png'
    },
    {
      content: "先洗手消毒，隔离衣物才保险",
      immuneNum: 1,
      protectNum: 1,
      loveNum: 1,
      moodNum: -1,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/17.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/17.png",
  },
  {
    stem: "准备些口罩上班用",
    options: [{
      content: "N95走起，全面防护",
      immuneNum: 0,
      protectNum: 1,
      loveNum: -2,
    moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/18.1.png'
    },
    {
      content: "一次性医用口罩刚刚好",
      immuneNum: 0,
      protectNum: 1,
      loveNum: 1,
      moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/18.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/18.png",
  },
  {
    stem: "口罩稀缺就像国宝，如需重复使用",
    options: [{
      content: "挂在洁净干燥通风处，让它也透透气吧",
      immuneNum: 0,
      protectNum: 1,
      loveNum: 1,
      moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/19.1.png'
    },
    {
      content: "喷点酒精给它消消毒",
      immuneNum: 0,
      protectNum: -2,
    loveNum: -1,
    moodNum: 0,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/19.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/19.png",
  },
  {
    stem: "盼星星，盼月亮，新买的大衣终于寄到手了",
    options: [{
      content: "先把包裹放阳台晾晒，洗手消毒最重要",
      immuneNum: 0,
      protectNum: 1,
      loveNum: 0,
      moodNum: -1,
    imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/20.1.png'
    },
    {
      content: "立马拆开包裹先试试，气质一定max",
      immuneNum: 0,
      protectNum: -2,
    loveNum: 0,
      moodNum: 2,
      imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/20.2.png'
    }
    ],
    img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/20.png",
  }
  //,
  //{
  // stem: "快看前面有辆湖北车",
  // options: [{
  //   content: "报告社区或物业",
  //  immuneNum: 0,
  //  protectNum: 1,
  //  loveNum: 1,
  //  moodNum: 0,
  //  imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/7.1.png'
  //  },
  //  {
  //   content: "雨女无瓜，走吧",
  //   immuneNum: 0,
  //   protectNum: -1,
  //   loveNum: -1,
  //   moodNum: 0,
  //  imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/7.2.png'
  // }
  //],
  // img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/7.png",
  //}, {
  //stem: "天气真好，我要出去透透气",
  //options: [{
  //   content: "穿上皮大衣，我就是这条gai最靓的仔",
  //  immuneNum: 0,
  //   protectNum: -1.5,
  //  loveNum: -1.5,
  //   moodNum: 2,
  //   imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/11.1.png'
  // },
  // {
  //  content: "还是喜欢毛衣，低调有内涵",
  //  immuneNum: 0,
  //  protectNum: 1,
  // loveNum: 1,
  // moodNum: 2,
  // imageUrl: 'https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/7/11.2.png'
  //  }
  //  ],
  // img: "https://reportzhej.hualife.cc:8443/zjhx-reports/views/images/yinbao/5/11.png",
  //}, 

]
module.exports = questions
