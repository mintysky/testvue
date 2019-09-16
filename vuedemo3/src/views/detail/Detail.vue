<template>
  <div id="detail" class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll class="detail-content">
      <detail-swiper :top-img="topImg"></detail-swiper>
      <detail-base-info :goods="goodsInfo"></detail-base-info>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
          <li>8</li>
          <li>9</li>
          <li>10</li>
          <li>11</li>
          <li>12</li>
          <li>13</li>
          <li>14</li>
          <li>15</li>
          <li>16</li>
          <li>17</li>
          <li>18</li>
          <li>19</li>
          <li>20</li>
          <li>21</li>
          <li>22</li>
          <li>23</li>
          <li>24</li>
          <li>25</li>
          <li>26</li>
          <li>27</li>
          <li>28</li>
          <li>29</li>
          <li>30</li>
          <li>31</li>
          <li>32</li>
          <li>33</li>
          <li>34</li>
          <li>35</li>
          <li>36</li>
          <li>37</li>
          <li>38</li>
          <li>39</li>
          <li>40</li>
          <li>41</li>
          <li>42</li>
          <li>43</li>
          <li>44</li>
          <li>45</li>
          <li>46</li>
          <li>47</li>
          <li>48</li>
          <li>49</li>
          <li>50</li>
        </ul>
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";

import Scroll from "components/common/scroll/Scroll";
class Goods {
  constructor(itemInfo, cols, service) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.cols = cols;
    this.services = service;
  }
}

export default {
  props: {},
  data() {
    return {
      iid: null,
      topImg: [],
      goodsInfo: {},
      shopInfo:{}
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    Scroll
  },
  computed: {},
  created() {
    this.iid = this.$route.params.id;
    this.getGoodDetail();
  },
  mounted() {},
  watch: {},
  methods: {
    getGoodDetail() {
      this.axios.get("/detail", { params: { iid: this.iid } }).then(res => {
        let data = res.data.result;
        this.topImg = data.itemInfo.topImages;
        // console.log(res.data.result);
        this.goodsInfo = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        console.log(this.goodsInfo);
      });
    }
  }
};
</script>

<style scoped lang="scss">
.detail {
  height: 100vh;
  background-color: #fff;
  position: relative;
  z-index: 1;
}
.detail-content{
  background-color: #fff;
  position: absolute;
  top: 44px;
  right: 0;
  left: 0;
  bottom: 0;
}
</style>
