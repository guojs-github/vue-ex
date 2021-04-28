// 依据指定条件，过滤仓库名称
import { computed } from 'vue';

export default function repositoryNameSearch(repositories, search) {
	const searchQuery = search;
	const repositoriesMatchingSearchQuery = computed(() => { // 添加一个计算属性，用于显示过滤后的仓库清单
		return repositories.value.filter(repository => {
			let temp = searchQuery.value.toLowerCase().trim();
			return repository.toLowerCase().indexOf(temp) !== -1; // 是否包含指定的字符串，忽略大小写
		});
	});

	return {
		searchQuery, 					// 反馈过滤字符串设置
		repositoriesMatchingSearchQuery // 返回过滤后的仓库查询结果
	};
}