import React, { Component } from 'react';
import './App.css';
import applePicUrl from './imgs/Apple.png';
import findPicUrl from './imgs/find.svg';
import bagPicUrl from './imgs/bag.svg';
import iphonePicUrl from './imgs/troye.jpg';
import iphonePicUrl2 from './imgs/Aurora.png';

class App extends Component {
  render() {
    return (
      <div>
          <div className='fixed-header'>
            <div className='headerArea'></div>
            <div className='navArea'>
                <ul className='nav-li'>
                    <li className='apple-img'>
                        <a href=""><img src={applePicUrl} alt=""/></a>
                    </li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>iPhone</li>
                    <li>Watch</li>
                    <li>Music</li>
                    <li>技术支持</li>
                    <li className='apple-img'><img src={findPicUrl} alt=""/></li>
                    <li className='apple-img'><img src={bagPicUrl} alt=""/></li>
                </ul>
            </div>
          </div>
          <div className='title-area' >
              <div style={{textAlign:'center'}}>
                  <h2 className='title'>折抵换购 iPhone XR 仅 RMB 183/月起，或 RMB 4399 起*。</h2>
                  <h3 className='sub-title'>前往 Apple Store 零售店，将你现有的 iPhone 升级换购成 iPhone XR，时机正好。</h3>
                  <h3 className='further-link' style={{fontSize:'18px'}}><a href="" className='link-normal' >进一步了解</a> ></h3>
              </div>
          </div>
          <div className='iphone-area'>
              <div className='xr iphone'>
                  <div href="">
                      <div className='msg-area'>
                          <h2>iPhone XR</h2>
                          <h3>全面屏设计，iPhone 上最强的电池续航，出类拔萃的性能，
                              <br />以及影棚质感的照片效果。
                          </h3>
                          <h3 className='further-link'><a href="" className='link-normal'>进一步了解</a> >   <a href="" style={{marginLeft:'1em'}} className='link-normal'>购买</a> ></h3>
                      </div>
                      <div className='pic-area'>
                          <img src={iphonePicUrl} alt=""/>
                      </div>
                  </div>
              </div>
              <div className='iphone'>
                  <div href="">
                      <div className='msg-area'>
                          <h2>iPhone XS</h2>
                          <h3>全面屏设计，iPhone 上最强的电池续航，出类拔萃的性能，
                              <br />以及影棚质感的照片效果。
                          </h3>
                          <h3 className='further-link'><a href="" className='link-normal'>进一步了解</a> >   <a href="" style={{marginLeft:'1em'}} className='link-normal'>购买</a> ></h3>
                      </div>
                      <div className='pic-area'>
                          <img src={iphonePicUrl} alt=""/>
                      </div>
                  </div>
              </div>
              <div className='iphone'>
                  <div href="">
                      <div className='msg-area'>
                          <h2>iPhone X</h2>
                          <h3>全面屏设计，iPhone 上最强的电池续航，出类拔萃的性能，
                              <br />以及影棚质感的照片效果。
                          </h3>
                          <h3 className='further-link'><a href="" className='link-normal'>进一步了解</a> >   <a href="" style={{marginLeft:'1em'}} className='link-normal'>购买</a> ></h3>
                      </div>
                      <div className='pic-area'>
                          <img src={iphonePicUrl} alt=""/>
                      </div>
                  </div>
              </div>
          </div>
          <div className='other-content-area'>
              <div><img src={iphonePicUrl} alt=""/></div>
              <div><img src={iphonePicUrl} alt=""/></div>
              <div><img src={iphonePicUrl} alt=""/></div>
              <div><img src={iphonePicUrl} alt=""/></div>
              <div><img src={iphonePicUrl} alt=""/></div>
              <div><img src={iphonePicUrl} alt=""/></div>
          </div>
        <div className='bottom-area'>
            <div className='bottom-content'>
                <div className='borderBottom'>
                    there should be something.
                </div>
                <div className='bottom-help'>
                    <div>title1</div>
                    <div>title2</div>
                    <div>title3</div>
                    <div>title4</div>
                    <div>title5</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
                <div className='borderBottom'>更多选购方式：前往 aaaaaa 零售店，致电 aaa-aaa-aaaa 或查找在你附近的授权经销商。</div>
                <div className='copyright'>
                    <span>Copyright © 2019 aaaaaa Inc. 保留所有权利。
                        <ul>
                            <li><a href="">隐私政策</a></li>
                            <li><a href="">使用条款</a></li>
                            <li><a href="">法律信息</a></li>
                            <li><a href="">网站地图</a></li>
                        </ul>
                </span>

                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
