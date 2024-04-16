<div class="bbn-hidden">
  <component v-for="(col, idx) in columns"
             :is="'bbn-' + col.field"
             :key="idx"
  ></component>
</div>
<bbn-table v-if="isMounted"
           :source="data"
           ref="tab"
           :columns="columns"
           :groupable="true"
           :group-by="0"
           :sortable="true"
           :filterable="true"
           :order="[{field: 'name', dir: 'ASC'}]"
           class="bbn-green"
           @mouseover="ciccio"
>

</bbn-table>

<!--script type="text/x-template" id="tableProps">
  <div style="height: 300px; margin-right:30px; position:relative">
    <bbn-table :columns="col1"


    >
    </bbn-table>
  </div-->