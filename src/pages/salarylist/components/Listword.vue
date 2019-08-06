<template>
	<div>
		<el-button type="primary" size="mini" plain>请选择部门：</el-button>
		<el-select v-model="value" placeholder="股东会">
			<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
			</el-option>
		</el-select>
	</div>
</template>


<script>
	export default {
		data() {
			return {
				options: [{
				  value: '选项1',
				  label: '股东会'
				}, {
				  value: '选项2',
				  label: '董事会'
				}, {
				  value: '选项3',
				  label: '总会'
				}, {
				  value: '选项4',
				  label: '财务部'
				}, {
				  value: '选项5',
				  label: '市场部'
				}, {
				  value: '选项6',
				  label: '华北市场部'
				}, {
				  value: '选项7',
				  label: '华南市场部'
				}, {
				  value: '选项8',
				  label: '石家庄市场部'
				}, {
				  value: '选项9',
				  label: '西北市场部'
				}, {
				  value: '选项10',
				  label: '莲湖区市场'
				}, {
				  value: '选项11',
				  label: '技术部'
				}, {
				  value: '选项12',
				  label: '运维部'
				}, {
				  value: '选项13',
				  label: '西安市场'
				}],
				value: ''
			};
		}
	}
</script>

<style scoped>

</style>
