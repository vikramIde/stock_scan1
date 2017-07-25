<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
	mounted(){
		// console.log(cordova);
		this.manageFolders();
	},
	methods:{
		onErrorDir(err){
			console.log(err);
		},
		manageFolders()
		{
			window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function(dir) {
				

	            try{
	                console.log("Creating directories");
	                dir.getDirectory("batch", {create:true}, function(subDir) {},function(err){console.log(err)});
	                dir.getDirectory("sync", {create:true}, function(subDir) {},function(err){console.log(err)});

	            }
	            catch(err){
	              	console.log(err);
	            }
	            
	        });
		}
	}
}
</script>

<style></style>
