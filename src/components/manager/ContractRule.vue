<template>
    <v-container>
        <h1>계약 관리 지침에 대해서 작성하시오.</h1>
        <ContractRuleEditor />
    </v-container>
</template>
<script>
import ContractRuleEditor from '../../components/editor/ContractRuleEditor.vue'
export default {
    name : 'establishUw',
    components : {
        ContractRuleEditor
    }
}
</script>