import Vue from 'vue'
import { mapMutations } from 'vuex';


Vue.mixin({
    methods: {
        ...mapMutations(['updateLoadingGlobal', 'updateDialogMess']),
        setLoadingStatus(status) {
            this.updateLoadingGlobal(status);
        },
        showDialogMess({ status = false, mess = "" }) {
            this.updateDialogMess({ status, mess })
        },
        checkResponse(response) {
            if (!response.ok) {
                this.showDialogMess({
                    status: true,
                    mess: "Lỗi hệ thống",
                });
                return false
            } else {
                const { status } = response.data;
                if (!status) {
                    this.showDialogMess({
                        status: true,
                        mess: 'Status not found',
                    });
                    return false
                } else {
                    return true
                }
            }

        },
    }
})