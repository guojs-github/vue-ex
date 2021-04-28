<!--仓库查询-->
<template>
	<div class='-content repositories'>
	</div>
</template>

<script>
import userRepositories from './userRepositories.js';
import repositoryNameSearch from './repositoryNameSearch.js';
import { toRefs } from 'vue';

export default {
	name: 'Repositories', 
	
	components: {
	},

	setup (props) {	// 在组件真正实例化前，进行设置与整合外部引用
		// 使用 `toRefs` 创建对 props 中的 `user` property 的响应式引用
		const { user, search } = toRefs(props);

		const { // 按照用户过滤仓库清单
			repositories,
			getUserRepositories
		} = userRepositories(user);
		
		const { // 按照查询字符串，在用户过滤基础上过滤仓库清单
			searchQuery,
			repositoriesMatchingSearchQuery
		} = repositoryNameSearch(repositories, search);
		
		return {
			repositories: repositoriesMatchingSearchQuery, // 过滤用户和字符串后的最终仓库清单
			getUserRepositories, // 按用户过滤仓库清单函数
			searchQuery // 查询字符串设定
		};		
	},
	
	props: {
		user: {
			type: String,
			required: true
		},
		
		search: {
			type: String,
			default: ''
		}
	},
	
	data() {
		return {
		};
	},

	methods: {	
		/*************************/
	}
};
</script>

<style scoped src='./Repositories.less' lang='less'/>
<style scoped>
</style>