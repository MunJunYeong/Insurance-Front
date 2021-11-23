<template>
    <v-container>
        <v-row justify='center' >
            <SubscriptionEditor id="myEditor" />
        </v-row>
    </v-container>
</template>
<script>
import SubscriptionEditor from '../editor/SubscriptionEditor.vue'
export default {
    name : 'subcription',
    components: {
        SubscriptionEditor
    },
}
</script>
<style lang="scss" scoped>
.editor {
  display: flex;
  flex-direction: column;
  max-height: 400px;
  color: #0D0D0D;
  background-color: white;
  border: 3px solid #0D0D0D;
  border-radius: 0.75rem;

  &__header {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: 0.25rem;
    border-bottom: 3px solid #0D0D0D;
  }

  &__content {
    padding: 1.25rem 1rem;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
  #myEditor{
      background-color: darkcyan;
  }

  

  
}
</style>