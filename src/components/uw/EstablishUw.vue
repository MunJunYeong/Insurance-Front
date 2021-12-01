<template>
    <v-container>
        <h1>인수 정책에 대해서 작성하시오.</h1>
        <UwEditor />
    </v-container>
</template>
<script>
import UwEditor from '../../components/editor/UwEditor.vue'
export default {
    name : 'establishUw',
    components : {
        UwEditor
    }
}
</script>