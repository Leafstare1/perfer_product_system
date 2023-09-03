<template>
    <div>
    
        <h1>商品喜好紀錄系統</h1>
    
    </div>
    <div>
        <p>查詢金融商品</p>
        <router-link to="/router/Enquiry.vue"><td><button>查詢頁面</button></td></router-link>
        <router-link to="/router/Delete.vue"><td><button>刪除頁面</button></td></router-link>
        <router-link to="./App.vue"><td><button>紀錄頁面</button></td></router-link>
        <router-link to="/router/Update.vue"><td><button>更改頁面</button></td></router-link>
    <table width="00" height="80">　
        <tr><td align="left" >請輸入產品名稱</td></tr>
        <td><input type="text"></td>
        <td><button>確定</button></td>
 
        
  
        
    </table>
    
    </div>
    </template>
    
    <script setup>

    
    </script>
    
    
    
    <style scoped>
    a:link, a:visited {
      background-color: #f44336;
      color: white;
      padding: 14px 25px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
    }
    
    a:hover, a:active {
      background-color: red;
    }
    
    </style>
    