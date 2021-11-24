import axios from 'axios'
import {defineComponent,reactive,toRefs} from 'vue'

export default defineComponent({
    setup(props){
        const state = reactive({
            accountNumber:'',
            password:''
        })
          const login=()=>{
                let msg={accountNumber:state.accountNumber,password:state.password}
                //2.使用axios 进行get请求
                axios.get("/api", {params: msg}).then((res)=>{
                  //请求成功的回调函数
                  console.log("200")
                }).catch((err)=>{
                  //请求失败的回调函数
                  console.log(err)
                })
             }

            return{
                ...toRefs(state),
                login
            } 
        } 
})
