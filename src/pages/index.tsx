import React, { Component } from 'react';
import { connect } from 'dva';
import { Input, Menu, Dropdown, Carousel, Card, Tag } from 'antd';
import {
  QqOutlined,
  WechatOutlined,
  EyeOutlined,
  MessageOutlined,
  LikeOutlined,
  ShareAltOutlined,
} from '@ant-design/icons';
import styles from './index.less';
const banner1 = require('../assets/banner_1.jpg');
const banner2 = require('../assets/banner_2.jpg');
const banner3 = require('../assets/banner_3.jpg');

const { Search } = Input;
const { Meta } = Card;

const qqMenu = (
  <Menu>
    <Menu.Item>
      <p style={{ fontSize: '14px', marginBottom: '0.5em' }}>私聊不多先生：</p>
      <p style={{ fontSize: '14px' }}>1410158663</p>
    </Menu.Item>
  </Menu>
);

const wxmapMenu = (
  <Menu>
    <Menu.Item>
      <img
        alt="微信公众号二维码"
        src="https://mp.weixin.qq.com/mp/qrcode?scene=10000004&amp;size=102&amp;__biz=MzI0NDQ4MjE4MQ==&amp;mid=2247484334&amp;idx=1&amp;sn=768107a3295b9b2ce469ed4e0be88d62&amp;send_time="
      />
      <p style={{ textAlign: 'center' }}>关注微信公众号</p>
    </Menu.Item>
  </Menu>
);

const articles = [
  {
    comment_num: 9,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485203&idx=1&sn=1cd59f9e14d0410988f759736908f211&chksm=e95c6ef9de2be7ef60693047dd307fae3dc68edf867a53ce164801058de33a13cfc78624a6c5#rd',
    copyright_type: 2,
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/NibdZ1bO1sibk9fMs88S7SWenCl1qlTWiaMC3rT0RZPpey6gS4QNQ6Yv28r2LocfUh7KrjlzpdHticSWvNmoqj0MTA/0?wx_fmt=jpeg',
    like_num: 3,
    read_num: 278,
    title: '姐姐的小屋——隔空的善意和深情',
  },
  {
    comment_num: 29,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485199&idx=1&sn=9dd599d629d63da72f3aac14eb3ddac5&chksm=e95c6ee5de2be7f3188fdf0abf90011ff858455b1dd6e4a761bedca8eafa6364e2383bd16afe#rd',
    copyright_type: 1,
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/EoVE0HMSE9t3smxEdMgWygjBMwLvPOicztkK9QOazVDubjX8mfATb4CLJW0HAbnKp09AFHBfqBJ1AcqHt0qK5Kw/0?wx_fmt=jpeg',
    like_num: 36,
    read_num: 1502,
    reprint_num: 1,
    title: '我们的小屋',
  },
  {
    comment_num: 0,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485180&idx=1&sn=a06d6be5bccf691f81de4b7769b4e14f&chksm=e95c6f16de2be6008e3110fad48c7d199b85a1c9d177d77d4e3d9c4a27f0f767f2f5e90eaae0#rd',
    copyright_type: 1,
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/EoVE0HMSE9uf7G7mUtoGibeibUv9ia0KUtxwgSric30iaIKnFeAopdjRHemdFdawBBfiaiaZqsSPP4I5iaNV7ibsic7II2CA/0?wx_fmt=jpeg',
    like_num: 3,
    read_num: 180,
    reprint_num: 0,
    title: '黔东南游记',
  },
  {
    comment_num: 5,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485173&idx=1&sn=2119159a6b72cda5de00193d5db82765&chksm=e95c6f1fde2be6092355abb7fdc0a8f632b8a7ceacd2595faf66b28258d0b91933b50eaf18a6#rd',
    copyright_type: 1,
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/EoVE0HMSE9tFn8bmicicnvjRIMBvgz8hK0ES1NzdIyfxZcEL7Z42cQaZsiamMwMNbOWhpBW4zVrqdTtmYZIrYP4Iw/0?wx_fmt=jpeg',
    like_num: 2,
    read_num: 244,
    reprint_num: 0,
    title: '网吧老板，你好',
  },
  {
    comment_num: 4,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485168&idx=1&sn=b2295c05e05192dde2cb8eb2ea1dd7c5&chksm=e95c6f1ade2be60c05c27345a750dd4dda003593e6a0d630a11d0bfb9c184ee830ac8725167d#rd',
    copyright_type: 1,
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/EoVE0HMSE9vlTc0qHiauLu3MSv9G0VZKxsgBdJYuj3q8m0Dye5uajV5wxJvamTwUkHITwzJwMzfZeIE1ibt9TIvQ/0?wx_fmt=jpeg',
    like_num: 5,
    read_num: 249,
    reprint_num: 0,
    title: '满船清梦压星河',
  },
  {
    comment_num: 20,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485161&idx=1&sn=7c8211db9f36451549252ab7ae219ed3&chksm=e95c6f03de2be61585767a1a7bac6d5ce2e1ddc5ec008f069a723ed2d025b4b4c16d6c40c945#rd',
    copyright_type: 1,
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/EoVE0HMSE9tFQmlB65PS6QtMgsmQo1ukS97icvRQphFNBsTeoSLoicJyRtRRgonDeib7kQBFDibjibLUEajLOgV2MEg/0?wx_fmt=jpeg',
    like_num: 9,
    read_num: 672,
    reprint_num: 0,
    title: '木心如子',
  },
  {
    comment_num: 3,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485152&idx=1&sn=d832ad364709efe0477e34f7255908ea&chksm=e95c6f0ade2be61cb5d22c28fe73539db0b1a36babdecaf1aa0cffe061a6875759300b1c3968#rd',
    copyright_type: 0,
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/EoVE0HMSE9sh9EMsX1VosLFuNvbaC49lDSt1cJEOQrNaQLwX7vuOoGLnpqYW4ubM5icHF2tLicUZ8SFaJXzpKtEQ/0?wx_fmt=jpeg',
    like_num: 4,
    read_num: 196,
    title: '你来人间一趟，你要看看太阳',
  },
  {
    comment_num: 1,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485148&idx=1&sn=e47b55be99e21b7fb60d2ce3abb9cf12&chksm=e95c6f36de2be62070f4f5d64f0f1d23a58f527a4cc678d2c4e5c2a19682886979f2f368f2f0#rd',
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/EoVE0HMSE9t10k4hOuLAntkomy7CXsicibOxUdC8yzvqM7QBiciaIvWJOvDIhKVSlkreI0e7RyqGkDHEvicNEnY3e7g/0',
    like_num: 3,
    read_num: 160,
    title:
      '以前觉得玩轮滑只是耍帅\n\n直到遇见华信的社长\n\n才知道\n\n有些人是真的帅',
  },
];

const stories = [
  {
    comment_num: 6,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485146&idx=1&sn=f5b63dcfd0732b8e89a3ac5797896374&chksm=e95c6f30de2be626e886374a747f249bda231a662230bf31562db8073c721f25bd8e258ba9c9#rd',
    copyright_type: 1,
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/EoVE0HMSE9sU9cvbEvicKW0tml1OJw5WRXb5rvIFuqoIEOxEgbBZJUjKicLusib6A8NoPJFpPSlfA9vakb1Q0Qt6A/0?wx_fmt=jpeg',
    like_num: 2,
    read_num: 196,
    reprint_num: 0,
    title: '南风知我意',
  },
  {
    comment_num: 1,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485140&idx=1&sn=c95781d73d49af3dbcf191098ebaef87&chksm=e95c6f3ede2be6287531cb759339c700761101d2d15cca905393a9bdd1ad32004fc18f8331a1#rd',
    copyright_type: 1,
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/EoVE0HMSE9sU9cvbEvicKW0tml1OJw5WRnx2MmLFzHRbASakQIJclIRhWsic5OSrXbXr4iba7gBs3govsnmfNxHFA/0?wx_fmt=jpeg',
    like_num: 1,
    read_num: 147,
    reprint_num: 0,
    title: '见青山',
  },
  {
    comment_num: 4,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485134&idx=1&sn=4baa04d06b87546fa48c0120bb4c4253&chksm=e95c6f24de2be6322c24d1e2525dffdc07cb7d1897ff74467a1f9b443e3144a98d05d98a1337#rd',
    copyright_type: 1,
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/EoVE0HMSE9uXHnVjrlqCOx3ygeuBxR0YELWwIicE2rTVibIXA71oWxZiavYAY1l3zbkRVMKziaIMPgibV6R5CxqgibFg/0?wx_fmt=jpeg',
    like_num: 3,
    read_num: 279,
    reprint_num: 0,
    title: 'lele_R',
  },
  {
    comment_num: 7,
    content_url:
      'http://mp.weixin.qq.com/s?__biz=MzI0NDQ4MjE4MQ==&mid=2247485127&idx=1&sn=7c076ad1c0eff9f0f84bb125792b39b6&chksm=e95c6f2dde2be63b5bf0925b2592cfeeff4c93aafe42775ba48c42294b2da28532b22af55d93#rd',
    copyright_type: 1,
    cover:
      'http://mmbiz.qpic.cn/mmbiz_jpg/EoVE0HMSE9uHibqqgIz8ZVDJZNeKuAjMnp3u4vy0ou4iagRic5e1fYZnNMkqKw8WiaziaFZ8BIUBBEbhVblKwoOvRsw/0?wx_fmt=jpeg',
    like_num: 1,
    read_num: 222,
    reprint_num: 0,
    title: '祝你快乐 不止中秋',
  },
];

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
    };
    this.weixinimgindex = 0;
  }

  componentWillMount() {
    /**
     * <meta name="renderer" content="webkit">
     * <meta name="referrer" content="never">
     */
    let meta1 = document.createElement('meta');
    meta1.name = 'renderer';
    meta1.content = 'webkit';
    document.head.appendChild(meta1);

    let meta2 = document.createElement('meta');
    meta2.name = 'renderer';
    meta2.content = 'never';
    document.head.appendChild(meta2);
  }

  componentDidMount() {}

  getArticleTitle(title, copyRightType) {
    let dom = (
      <div>
        {copyRightType == 1 ? <Tag>原创</Tag> : <Tag>转载</Tag>}
        {title}
      </div>
    );
    return dom;
  }

  getDescription(readNum, likdNum, commentNum, reprintNum) {
    let dom = (
      <div>
        <EyeOutlined />
        <span style={{ marginLeft: '5px' }}>{readNum || 0}</span>
        <MessageOutlined style={{ marginLeft: '15px' }} />
        <span style={{ marginLeft: '5px' }}>{commentNum || 0}</span>
        <LikeOutlined style={{ marginLeft: '15px' }} />
        <span style={{ marginLeft: '5px' }}>{likdNum || 0}</span>
        <ShareAltOutlined style={{ marginLeft: '15px' }} />
        <span style={{ marginLeft: '5px' }}>{reprintNum || 0}</span>
      </div>
    );
    return dom;
  }

  renderArticles = (articles, categoryName) => {
    const { searchValue } = this.state;
    let articleList = !!searchValue
      ? articles.filter((article) => article.title.indexOf(searchValue) > -1)
      : articles;
    let articlesDom = articleList.map((article) => (
      <Card
        hoverable
        // style={{ width: 240 }}
        cover={this.loadweixinimg(article.cover)}
        // cover={this.showImg(article.cover)}
        // cover={<img alt={article.title} src={article.cover} />}
        onClick={() => this.handleArticleClick(article.content_url)}
      >
        <Meta
          title={this.getArticleTitle(article.title, article.copyright_type)}
          description={this.getDescription(
            article.read_num,
            article.like_num,
            article.comment_num,
            article.reprint_num,
          )}
        />
      </Card>
    ));
    return (
      <div className={styles.articles}>
        <div className={styles.articlesTitle}>
          <div className={styles.flag}></div>
          <div className={styles.categoryName}>{categoryName}</div>
        </div>
        <div className={styles.articleList}>{articlesDom}</div>
      </div>
    );
  };

  loadweixinimg(url) {
    this.weixinimgindex++;
    window['img' + this.weixinimgindex] =
      '<img id="img' +
      this.weixinimgindex +
      '" src=\'' +
      url +
      '?' +
      Math.random() +
      "' οnlοad='parent.showweixinimg(this," +
      this.weixinimgindex +
      ")' style='width: 100%; height: 100%; padding: 0;' />";
    return (
      <iframe
        id={`frameimg${this.weixinimgindex}`}
        src={`javascript:parent.img${this.weixinimgindex};`}
        frameborder="no"
        border="0"
        marginwidth="0"
        marginHeight="0"
        scrolling="no"
        allowtransparency="yes"
      ></iframe>
    );
    // return <iframe id={`frameimg${this.weixinimgindex}`} src={`javascript:parent.img${this.weixinimgindex};`} style={{display: 'none'}}></iframe>;
  }
  showweixinimg(ele, key) {
    document.getElementById('#frameimg' + key).replaceWith(ele);
  }

  showImg = (url) => {
    let frameid = 'frameimg' + url;
    window[`img${frameid}`] =
      '<img id="img" src=\'' +
      url +
      '?' +
      Math.random() +
      "' /><script>window.onload = function() { parent.document.getElementById('" +
      frameid +
      "').height = document.getElementById('img').height+'px'; }<" +
      '/script>';
    return (
      <iframe
        id={frameid}
        src={`javascript:parent.img${frameid};`}
        frameBorder="0"
        scrolling="no"
        width="100%"
      ></iframe>
    );
  };

  handleArticleClick = (url) => {
    window.open(url);
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.header}></div>
        <div className={styles.content}>
          <div className={styles.contentTop}>
            <div className={styles.title}>微信公众号：不多讲故事</div>
            <div className={styles.search}>
              <Search
                placeholder="搜索一下看看，万一有更好的故事呢~"
                style={{ width: '350px' }}
                onSearch={(value) => this.setState({ searchValue: value })}
                allowClear
                enterButton
              />
            </div>
            <div className={styles.nav}>
              <Dropdown overlay={qqMenu}>
                <QqOutlined style={{ fontSize: '22px' }} />
                {/* <Icon type="qq" style={{fontSize: '22px' }} /> */}
              </Dropdown>
              <Dropdown overlay={wxmapMenu}>
                <WechatOutlined style={{ fontSize: '22px' }} />
              </Dropdown>
            </div>
          </div>
          <div className={styles.carousel}>
            <Carousel dotPosition="bottom" autoplay>
              <img src={banner1} alt="banner1"></img>
              <img src={banner2} alt="banner1"></img>
              <img src={banner3} alt="banner1"></img>
            </Carousel>
          </div>
          {this.renderArticles(articles, '文章精选')}
          {this.renderArticles(stories, '故事精选')}
        </div>
        <div className={styles.footer}>欢迎关注微信公众号不多讲故事！！！</div>
      </div>
    );
  }
}

// IndexPage.propTypes = {
// };

// function mapStateToProps(state) {

//   return {
//   };
// }

// export default connect(mapStateToProps)(IndexPage);
export default IndexPage;
