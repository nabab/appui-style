<!-- HTML Document -->
<!--<div class="bbn-overlay">
  <textarea class="bbn-100">Please wait, calculating data</textarea>
</div>-->

<bbn-table v-if="ready"
           :source="final"
           :columns="columns"
           class="import_components"
>

  <bbns-column field="componentName"
              title="Component"
              :width="250"
              :fixed="true"
  ></bbns-column>

</bbn-table>

<div class="bbn-overlay"
     v-else
  >
  <bbn-loader></bbn-loader>
</div>