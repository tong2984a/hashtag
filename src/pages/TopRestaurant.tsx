import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRouterLink
} from '@ionic/react';
import React from 'react';
import { CSSProperties } from "react";
import '../theme/resources/css/axure_rp_page.css';
import '../theme/data/styles.css';
import '../theme/files/top_restaurant/styles.css';
import { RouteComponentProps } from "react-router-dom";

const style_display_none_visibility_hidden: CSSProperties = {
  display: 'none',
  visibility: 'hidden'
}

const style_visibility_hidden: CSSProperties = {
  visibility: 'hidden'
}

interface TopRestaurantPageProps extends RouteComponentProps<{
  tab: string;
}> { }

const TopRestaurant: React.FC<TopRestaurantPageProps> = ({ match }) => {
  return (
    <IonPage>
      <IonContent>

          <div id="base" className="">


            <div id="u1842" className="ax_default box_3">
              <img id="u1842_img" className="img " src="images/top_restaurant/u1842.svg"/>
              <div id="u1842_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1843" className="ax_default box_3">
              <img id="u1843_img" className="img " src="images/top_restaurant/u1843.svg"/>
              <div id="u1843_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1844" className="ax_default box_1">
              <img id="u1844_img" className="img " src="images/main/u113.svg"/>
              <div id="u1844_text" className="text ">
                <p><span>&nbsp;</span></p>
              </div>
            </div>


            <div id="u1845" className="ax_default image">
              <img id="u1845_img" className="img " src="images/first/u5.png"/>
              <div id="u1845_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1846" className="ax_default box_3">
              <img id="u1846_img" className="img " src="images/top_restaurant/u1846.svg"/>
              <div id="u1846_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1847" className="ax_default" data-left="259" data-top="195" data-width="123" data-height="19">


              <div id="u1848" className="ax_default image">
                <img id="u1848_img" className="img " src="images/main/u42.png"/>
                <div id="u1848_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1849" className="ax_default image">
                <img id="u1849_img" className="img " src="images/main/u42.png"/>
                <div id="u1849_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1850" className="ax_default image">
                <img id="u1850_img" className="img " src="images/main/u42.png"/>
                <div id="u1850_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1851" className="ax_default image">
                <img id="u1851_img" className="img " src="images/main/u42.png"/>
                <div id="u1851_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1852" className="ax_default image">
                <img id="u1852_img" className="img " src="images/main/u42.png"/>
                <div id="u1852_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>
            </div>


            <div id="u1853" className="ax_default" data-left="111" data-top="94" data-width="188" data-height="36">


              <div id="u1854" className="ax_default heading_3">
                <div id="u1854_div" className=""></div>
                <div id="u1854_text" className="text ">
                  <p><span>Restaurant </span></p>
                </div>
              </div>


              <div id="u1855" className="ax_default image">
                <img id="u1855_img" className="img " src="images/top_restaurant/u1855.png"/>
                <div id="u1855_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>
            </div>


            <div id="u1856" className="ax_default heading_3">
              <div id="u1856_div" className=""></div>
              <div id="u1856_text" className="text ">
                <p><span>Food Name</span></p>
              </div>
            </div>


            <div id="u1857" className="ax_default line">
              <img id="u1857_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1857_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1858" className="ax_default line">
              <img id="u1858_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1858_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1859" className="ax_default line">
              <img id="u1859_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1859_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1860" className="ax_default line">
              <img id="u1860_img" className="img " src="images/top_restaurant/u1860.svg"/>
              <div id="u1860_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1861" className="ax_default line">
              <img id="u1861_img" className="img " src="images/top_restaurant/u1860.svg"/>
              <div id="u1861_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1862" className="ax_default line">
              <img id="u1862_img" className="img " src="images/top_restaurant/u1860.svg"/>
              <div id="u1862_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1863" className="ax_default box_3">
              <img id="u1863_img" className="img " src="images/top_restaurant/u1863.svg"/>
              <div id="u1863_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1864" className="ax_default" data-left="24" data-top="442" data-width="97" data-height="19">


              <div id="u1865" className="ax_default image">
                <img id="u1865_img" className="img " src="images/main/u42.png"/>
                <div id="u1865_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1866" className="ax_default image">
                <img id="u1866_img" className="img " src="images/main/u42.png"/>
                <div id="u1866_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1867" className="ax_default image">
                <img id="u1867_img" className="img " src="images/main/u42.png"/>
                <div id="u1867_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1868" className="ax_default image">
                <img id="u1868_img" className="img " src="images/main/u42.png"/>
                <div id="u1868_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>
            </div>


            <div id="u1869" className="ax_default heading_3">
              <div id="u1869_div" className=""></div>
              <div id="u1869_text" className="text ">
                <p><span>Food Name</span></p>
              </div>
            </div>


            <div id="u1870" className="ax_default line">
              <img id="u1870_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1870_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1871" className="ax_default line">
              <img id="u1871_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1871_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1872" className="ax_default line">
              <img id="u1872_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1872_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1873" className="ax_default line">
              <img id="u1873_img" className="img " src="images/top_restaurant/u1860.svg"/>
              <div id="u1873_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1874" className="ax_default box_3">
              <img id="u1874_img" className="img " src="images/top_restaurant/u1874.svg"/>
              <div id="u1874_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1875" className="ax_default" data-left="259" data-top="646" data-width="97" data-height="19">


              <div id="u1876" className="ax_default image">
                <img id="u1876_img" className="img " src="images/main/u42.png"/>
                <div id="u1876_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1877" className="ax_default image">
                <img id="u1877_img" className="img " src="images/main/u42.png"/>
                <div id="u1877_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1878" className="ax_default image">
                <img id="u1878_img" className="img " src="images/main/u42.png"/>
                <div id="u1878_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1879" className="ax_default image">
                <img id="u1879_img" className="img " src="images/main/u42.png"/>
                <div id="u1879_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>
            </div>


            <div id="u1880" className="ax_default heading_3">
              <div id="u1880_div" className=""></div>
              <div id="u1880_text" className="text ">
                <p><span>Food Name</span></p>
              </div>
            </div>


            <div id="u1881" className="ax_default line">
              <img id="u1881_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1881_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1882" className="ax_default line">
              <img id="u1882_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1882_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1883" className="ax_default line">
              <img id="u1883_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1883_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1884" className="ax_default line">
              <img id="u1884_img" className="img " src="images/top_restaurant/u1860.svg"/>
              <div id="u1884_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1885" className="ax_default line">
              <img id="u1885_img" className="img " src="images/top_restaurant/u1885.svg"/>
              <div id="u1885_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1886" className="ax_default line">
              <img id="u1886_img" className="img " src="images/top_restaurant/u1860.svg"/>
              <div id="u1886_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1887" className="ax_default line">
              <img id="u1887_img" className="img " src="images/top_restaurant/u1860.svg"/>
              <div id="u1887_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1888" className="ax_default box_3">
              <img id="u1888_img" className="img " src="images/top_restaurant/u1888.svg"/>
              <div id="u1888_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1889" className="ax_default" data-left="259" data-top="1184" data-width="97" data-height="19">


              <div id="u1890" className="ax_default image">
                <img id="u1890_img" className="img " src="images/main/u42.png"/>
                <div id="u1890_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1891" className="ax_default image">
                <img id="u1891_img" className="img " src="images/main/u42.png"/>
                <div id="u1891_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1892" className="ax_default image">
                <img id="u1892_img" className="img " src="images/main/u42.png"/>
                <div id="u1892_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1893" className="ax_default image">
                <img id="u1893_img" className="img " src="images/main/u42.png"/>
                <div id="u1893_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>
            </div>


            <div id="u1894" className="ax_default heading_3">
              <div id="u1894_div" className=""></div>
              <div id="u1894_text" className="text ">
                <p><span>Food Name</span></p>
              </div>
            </div>


            <div id="u1895" className="ax_default line">
              <img id="u1895_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1895_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1896" className="ax_default line">
              <img id="u1896_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1896_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1897" className="ax_default line">
              <img id="u1897_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1897_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1898" className="ax_default line">
              <img id="u1898_img" className="img " src="images/top_restaurant/u1860.svg"/>
              <div id="u1898_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1899" className="ax_default line">
              <img id="u1899_img" className="img " src="images/top_restaurant/u1860.svg"/>
              <div id="u1899_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1900" className="ax_default line">
              <img id="u1900_img" className="img " src="images/top_restaurant/u1900.svg"/>
              <div id="u1900_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1901" className="ax_default image">
              <img id="u1901_img" className="img " src="images/top_restaurant/u1855.png"/>
              <div id="u1901_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1902" className="ax_default box_3">
              <img id="u1902_img" className="img " src="images/top_restaurant/u1902.svg"/>
              <div id="u1902_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1903" className="ax_default" data-left="24" data-top="1437" data-width="97" data-height="19">


              <div id="u1904" className="ax_default image">
                <img id="u1904_img" className="img " src="images/main/u42.png"/>
                <div id="u1904_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1905" className="ax_default image">
                <img id="u1905_img" className="img " src="images/main/u42.png"/>
                <div id="u1905_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1906" className="ax_default image">
                <img id="u1906_img" className="img " src="images/main/u42.png"/>
                <div id="u1906_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1907" className="ax_default image">
                <img id="u1907_img" className="img " src="images/main/u42.png"/>
                <div id="u1907_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>
            </div>


            <div id="u1908" className="ax_default heading_3">
              <div id="u1908_div" className=""></div>
              <div id="u1908_text" className="text ">
                <p><span>Food Name</span></p>
              </div>
            </div>


            <div id="u1909" className="ax_default line">
              <img id="u1909_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1909_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1910" className="ax_default line">
              <img id="u1910_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1910_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1911" className="ax_default line">
              <img id="u1911_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1911_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1912" className="ax_default line">
              <img id="u1912_img" className="img " src="images/top_restaurant/u1860.svg"/>
              <div id="u1912_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1913" className="ax_default box_3">
              <img id="u1913_img" className="img " src="images/top_restaurant/u1913.svg"/>
              <div id="u1913_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1914" className="ax_default" data-left="259" data-top="1641" data-width="97" data-height="19">


              <div id="u1915" className="ax_default image">
                <img id="u1915_img" className="img " src="images/main/u42.png"/>
                <div id="u1915_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1916" className="ax_default image">
                <img id="u1916_img" className="img " src="images/main/u42.png"/>
                <div id="u1916_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1917" className="ax_default image">
                <img id="u1917_img" className="img " src="images/main/u42.png"/>
                <div id="u1917_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>


              <div id="u1918" className="ax_default image">
                <img id="u1918_img" className="img " src="images/main/u42.png"/>
                <div id="u1918_text" className="text " style={style_display_none_visibility_hidden}>
                  <p></p>
                </div>
              </div>
            </div>


            <div id="u1919" className="ax_default heading_3">
              <div id="u1919_div" className=""></div>
              <div id="u1919_text" className="text ">
                <p><span>Food Name</span></p>
              </div>
            </div>


            <div id="u1920" className="ax_default line">
              <img id="u1920_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1920_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1921" className="ax_default line">
              <img id="u1921_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1921_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1922" className="ax_default line">
              <img id="u1922_img" className="img " src="images/top_restaurant/u1857.svg"/>
              <div id="u1922_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1923" className="ax_default line">
              <img id="u1923_img" className="img " src="images/top_restaurant/u1860.svg"/>
              <div id="u1923_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1924" className="ax_default line">
              <img id="u1924_img" className="img " src="images/top_restaurant/u1885.svg"/>
              <div id="u1924_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1925" className="ax_default image">
              <img id="u1925_img" className="img " src="images/map/u192.svg"/>
              <div id="u1925_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1926" className="ax_default line">
              <img id="u1926_img" className="img " src="images/top_restaurant/u1926.svg"/>
              <div id="u1926_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1927" className="ax_default line">
              <img id="u1927_img" className="img " src="images/top_restaurant/u1926.svg"/>
              <div id="u1927_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1928" className="ax_default line">
              <img id="u1928_img" className="img " src="images/top_restaurant/u1926.svg"/>
              <div id="u1928_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1929" className="ax_default line">
              <img id="u1929_img" className="img " src="images/top_restaurant/u1926.svg"/>
              <div id="u1929_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1930" className="ax_default line">
              <img id="u1930_img" className="img " src="images/top_restaurant/u1926.svg"/>
              <div id="u1930_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1931" className="ax_default line">
              <img id="u1931_img" className="img " src="images/top_restaurant/u1931.svg"/>
              <div id="u1931_text" className="text " style={style_display_none_visibility_hidden}>
                <p></p>
              </div>
            </div>


            <div id="u1932" className="ax_default">
              <div id="u1932_state0" className="panel_state" data-label="State1">
                <div id="u1932_state0_content" className="panel_state_content">


                  <div id="u1933" className="ax_default" data-left="0" data-top="0" data-width="39" data-height="39">


                    <div id="u1934" className="ax_default ellipse">
                      <img id="u1934_img" className="img " src="images/notification/u299.svg"/>
                      <div id="u1934_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>


                    <div id="u1935" className="ax_default shape">
                      <img id="u1935_img" className="img " src="images/notification/u300.svg"/>
                      <div id="u1935_text" className="text " style={style_display_none_visibility_hidden}>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </IonContent>
    </IonPage>
  );
};
export default TopRestaurant;
