Vue.component('caculator',{
    template:'\
        <div class="caculator">\
            <div class="display">{{current || `0`}}</div>\
            <div class="btn" @click="clear">AC</div>\
            <div class="btn" @click="sign">+/-</div>\
            <div class="btn" @click="percent">%</div>\
            <div class="btn operator">÷</div>\
            <div class="btn" @click="append(7)">7</div>\
            <div class="btn" @click="append(8)">8</div>\
            <div class="btn" @click="append(9)">9</div>\
            <div class="btn operator">×</div>\
            <div class="btn" @click="append(4)">4</div>\
            <div class="btn" @click="append(5)">5</div>\
            <div class="btn" @click="append(6)">6</div>\
            <div class="operator">-</div>\
            <div class="btn" @click="append(1)">1</div>\
            <div class="btn" @click="append(2)">2</div>\
            <div class="btn" @click="append(3)">3</div>\
            <div class="btn operator" @click="add">+</div>\
            <div class="zero btn" @click="append(0)">0</div>\
            <div class="btn" @click="dot">.</div>\
            <div class="btn operator">=</div>\
        </div>',
        data(){
            return{
                current:'',
                operator:null
            }
        },
        methods:{
            clear(){
                // 清空显示
                this.current='';
            },
            sign(){
                // this.current.charAt(0)判断取正负
                this.current=this.current.charAt(0)==='-'?this.current.slice(1):`-${this.current}`;
            },
            percent(){
                this.current=`${parseFloat(this.current)/100}`;
            },
            append(number){
                this.current=`${this.current}${number}`;
            },
            dot(){
                if(this.current.indexOf('.') === -1){
                        this.append('.');
                }
            },
            divide(){},
            times(){},
            minus(){},
            add(){
                this.operator=(a,b)=>a+b;
            }
        }
})