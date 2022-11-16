<template>
    <q-page padding>
        <div class="q-pa-md" style="max-width: 400px">
            <!--<h5>Formulario de {{ acceder ? "Login" : "Registro" }}</h5>-->
            <img class="flex flex-center" src="https://i.ibb.co/17BfZPQ/logo-negro-y-color.png" style="max-width: 300px"/>
            <br />
            <q-form
                @submit="onSubmit"
                @reset="onReset"
                class="q-gutter-md"
                @submit.prevent="procesarFormulario"
            >
                <q-input
                filled
                v-model="email"
                hint="Usuario"
                lazy-rules
                :rules="[
                    (val) => (val && val.length > 0) || 'Por favor escriba el correo',
                ]"
                />
        
                <q-input
                v-model="password"
                filled
                :type="isPwd ? 'password' : 'text'"
                hint="Contraseña"
                >
                <template v-slot:append>
                    <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                    />
                </template>
                </q-input>
        
                <div class="q-gutter-sm flex flex-center ">
                <!--<q-btn label="Entrar" type="submit" color="primary" to="/Lista" />-->
                <q-btn :label="acceder ? 'Login' : 'Registro '" type="submit"/>
                <q-btn color="primary" v-if="!acceder" @click="acceder = true">
                    Tienes cuenta
                </q-btn>
        
                <q-btn color="negative" v-else @click="acceder = false">
                    no Tienes cuenta
                </q-btn>
                <q-btn color="positive" :to="acceder ? 'Crear' : 'Lista'">
                    cambiar pagina
                </q-btn>
                </div>
            </q-form>
        </div>
    </q-page>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>