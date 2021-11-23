<template>
    <v-container>
        <v-row justify='center' >
            <AccidentEditor id="myEditor" />
        </v-row>
    </v-container>
</template>
<script>
import AccidentEditor from '../editor/AccidentEditor.vue'
export default {
    name : 'claim',
    components: {
        AccidentEditor
    },
}
</script>