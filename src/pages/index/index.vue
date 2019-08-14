<template>
	<view class="content">
    <!-- <m-header></m-header> -->
    <div>微信授权</div>
	</view>
</template>

<script>
  import MHeader from '../../components/m-header/index'
  import axios from 'axios'

	export default {
    components: {
      MHeader
    },
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {
      this.getList()
		},
		methods: {
      getList() {
        // axios.get('https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923', {
        //   // params: data
        // }).then((res) => {
        //   // return Promise.resolve(res.data)
        // })
        // let url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8¬ice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=27&_=1519963122923'
        // axios.get(url)
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
      }
		}
	}
</script>

<style>
	.content {
		text-align: center;
		height: 400upx;
	}

	.logo {
		height: 200upx;
		width: 200upx;
		margin-top: 200upx;
	}

	.title {
		font-size: 36upx;
		color: #8f8f94;
	}
</style>
