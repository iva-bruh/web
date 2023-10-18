<script>
	import { onMount } from "svelte";
	import ToDoItems from "./ToDoItems.svelte";
    import ToDoTop from "./ToDoTop.svelte";

    let items = [];
    let id = 0;

    onMount(()=>{
        if(localStorage.key('items')){
            items = JSON.parse(localStorage.getItem('items'));
        }
        if(items.length){
        items.forEach((i)=>{
            if(id < i.id){
                id = i.id;
            }
        });
        id++;
        }
    });

    function DoneStatus(event){
        const item = items.find((i)=>event.detail.id);
        item.done = !item.done;
        items = items;
        localStorage.setItem('items', JSON.stringify(items));
    }

    function AddItem(event){
        const item = {
            id: id++,
            text: event.detail.text,
            done: false

        }
        items.push(item);
        items = items;
        localStorage.setItem('items', JSON.stringify(items));
    };

    function DeleteItem(event){
        const idx = items.findIndex((i)=>i.id === event.detail.id);
        items.slice(idx, 1);
        items = items;
        localStorage.setItem('items', JSON.stringify(items));
    };
</script>

<div class="list">
    <ToDoTop on:add={AddItem}/>
    <div class="list-self">
        {#each items as item }
        <ToDoItems id={item.id} text={item.text} done={item.done} on:change={DoneStatus} on:delete={DeleteItem}/>
        {/each}
    </div>
</div>


<style>
    .list{
        background: rgba(126, 202, 185, 0.767);
        height: 80%;
        width: 30%;
        display: flex;
        flex-direction: column;
        padding: 40px 60px;
        border-radius: 15px;
    }

    .list-self{
        background: white;
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 30px;
        margin-top: 15px;
        border-radius: 5px;
        flex-grow: 1;
        overflow-y: auto;
    }
</style>
