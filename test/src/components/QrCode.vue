<template>
    <div>
        Qrcode
        <h2>QrCode</h2>
        <qrcode-stream></qrcode-stream>
        <qrcode-drop-zone></qrcode-drop-zone>
        <qrcode-capture></qrcode-capture>
    </div>
</template>
<script>
import { QrcodeStream, QrcodeDropZone, QrcodeCapture } from 'vue-qrcode-reader'
export default {
    data() {
        return {

        }
    },
    components: {
        QrcodeStream,
        QrcodeDropZone,
        QrcodeCapture
    }
}
</script>