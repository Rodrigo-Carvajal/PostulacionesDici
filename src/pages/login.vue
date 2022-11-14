<template>

    <div class="row">
        <div class="col-md-7 col-sm-7 col-lg-7">
<q-img src="∼/assets/DeptoInformatica.jpg" style="height:655px" ></q-img>
        </div>
                <div class="col-md-5 col-sm-5 col-lg-5 q-pa-sm">
            <div class="">
                <div class="tect-h6 text-center text-bold q-pt-xl q-mt-xl">Login to Continue</div>
                <div class="q-pa-sm">
                    <q-input v-model="email" label="Email" outlined></q-input>
                    <q-input v-model="password" label="Password" type="password" outlined class="qmt-sm"></q-input>
                </div>
                <div class="">
                    <q-checkbox v-model="check" label="Remember Me"></q-checkbox>
                    <a href="" class="float-right" style="text-decoration:none">Forgot Password?</a>
                    <q-btn label="Login " style="width:100%" class="bg-primary text-white q-pa-sm" ></q-btn>
                </div>
                <div class="q-mt-xl text-center">
                    <span class="text-grey">or sing up using</span>
                    <div class="q-gutter ">
                        <q-btn icon="fa-brands fa-google" size="sm" round class="bg-blue text-white"></q-btn> 
                        <q-btn icon="fa-brands fa-twitter" size="sm" round class="bg-blue text-white"></q-btn> 
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
export default  {
    name: "Login",
    data(){
        return{
check:false,
email: '',
password: ''


        }
    }
}

</script>