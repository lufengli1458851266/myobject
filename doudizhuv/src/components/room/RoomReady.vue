<template>
	<div style='height:100%'>
		<table width='100%' height='100%'>
			<tr>
				<td align='center'>
					<div ref='seat0' style='border:1px solid green;width:300px;height:240px;'>&nbsp;</div>
				</td>
				<td align='center'>
					<div ref='seat1' style='border:1px solid green;width:300px;height:240px;'>&nbsp;</div>
				</td>
			</tr>
			<tr>
				<td colspan='2' align='center'>
					<div  ref='seat2' style='border:1px solid green;width:300px;height:240px;'>&nbsp;</div>
				</td>
			</tr>
		  </table>
		  <input type='button' value='按钮' @click='ready'/>
	</div>
</template>
<script>
import {ready} from '../../vuex/actions/HallAction'
export default {
	methods:{
		setSeat:function(ii,playName){
			this.$refs['seat'+ii].innerHTML=playName;
		},
		ready:function(){
			ready();
		}
	}
}
</script>
