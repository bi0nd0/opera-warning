<template>
    <Modal ref="myModal">
        <template #header>
            <span class="modal-title">Attenzione</span>
        </template>
        <div>
            <p>È online una nuova versione della risorsa.</p>
            <p>Queste pagine saranno dismesse prossimamente.</p>
        </div>
        <template #footer="{data:{onCancelClicked, onOkClicked}}">
            <div class="footer">
                <div class="left-footer">
                    <input type="checkbox" name="rememberMe" id="rememberMe" v-model="rememberMe">
                    <label for="rememberMe">non mostrare di nuovo</label>
                </div>
                <div class="right-footer">
                    <button type="button" class="btn btn-secondary btn-sm" @click="onOkClicked">Ok</button>
                    <button type="button" class="btn btn-primary btn-sm"  @click="onExploreNewClicked">Scopri il nuovo sito</button>
                </div>
            </div>
        </template>
    </Modal>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import Modal from './Modal.vue'

const myModal = ref()
const rememberMe = ref(false)

const newSite = 'https://battesimi.duomo.firenze.it'

function onExploreNewClicked() {
    location.href = newSite
}

function updateSettings() {
    if (rememberMe.value===true) {
        localStorage.setItem('do-not-show-again', true);
    }
}
function shouldShow() {
    return localStorage.getItem('do-not-show-again') !== 'true';
}

onMounted( async () => {
    if(shouldShow()) {
        const response = await myModal.value.show()
        if(response===false) return
        updateSettings()

    }
})



</script>

<style scoped>
.footer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    line-height: 2rem;
}
.footer input {
}
.left-footer {
    display: flex;
    align-items: center;
}
.right-footer {
    display: flex;
    gap: 5px;
    margin-left: auto;
}
</style>