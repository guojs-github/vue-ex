// 依据用户名称，查询仓库清单
import { ref, onMounted, watch } from 'vue';

export default function userRepositories(user) {
	const repositories = ref([]); // V3，创建一个值得引用或者指针
	const getUserRepositories = function() { // 依据指定用户，返回仓库列表。
		repositories.value = [];
		if (user.value.toLowerCase().trim() === '中国') {
			repositories.value = ['上海仓库', '北京仓库', '天津仓库', '重庆仓库', '哈尔滨仓库', '新疆仓库', '东京仓库','海口仓库','台北仓库','高雄仓库'];	
		} else if (user.value.toLowerCase().trim() === 'usa') {
			repositories.value = ['NewYork', 'Washington', 'Atlanta', 'Boston', 'Saint Paul, Minnesota'];	
		}
	};

	onMounted(function() {
		getUserRepositories();
	}); // mounted事件时候取一次数据

	watch(user, function() {
		getUserRepositories();
	}); // user属性变化的时候，取一次数据

	return {
		repositories, // 导出查询结果
		getUserRepositories // 导出查询函数
	};
}