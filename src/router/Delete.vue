<template>
    <div>
    
        <h1>商品喜好紀錄系統</h1>
    
    </div>
    <div>
        <p>請輸入要刪除的金融商品</p>
        <router-link to="/router/Enquiry.vue"><td><button>查詢頁面</button></td></router-link>
        <router-link to="/router/Delete.vue"><td><button>刪除頁面</button></td></router-link>
        <router-link to="./App.vue"><td><button>紀錄頁面</button></td></router-link>
        <router-link to="/router/Update.vue"><td><button>更改頁面</button></td></router-link>
    <table width="00" height="80">
    <div class="screen1" v-if="view==1">
        <tr><td align="left" >請輸入產品名稱</td></tr>
        <td><input type="text"></td>
        <tr><td align="left" >請輸入刪除的帳戶</td></tr>
        <td><input type="text"></td>
    </div>　
    <div class="screen2" v-if="view==2">
        <tr><td align="left">資料已刪除</td></tr>
        <td><button v-on:click="activate">返回</button></td>
    </div>
        <td><button v-on:click="activate2">確定</button></td>
      
        
        
    </table>
    
    </div>
    </template>
    
    <script setup>
    const view=ref(1)
const activate=()=>{
view.value=2
}
const activate2=()=>{
view.value=1
}
    
    </script>
    
    
    
    <style scoped>
    
    
    </style>
    