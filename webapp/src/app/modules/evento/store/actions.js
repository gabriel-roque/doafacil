import * as types from './types';
import { requisicaoAutorizada } from '../../account/_helpers/requisicao-autorizada';

const BASE_URL = 'http://localhost/v1';

export const statusPnlCreate = ({ commit }, payload) => {
  commit(types.ESTADO_PNL_CREATE, payload);
};

export const statusPnlList = ({ commit }, payload) => {
  commit(types.ESTADO_PNL_LIST, payload);
};

export const eventoEditar = ({ commit }, payload) => {
  commit(types.EVENTO_EDITAR, payload);
};

export const visibleCreatePnlEvento = ({ commit }, payload) => {
  commit(types.VISIBLE_PNL_CREATE, payload);
};

export const criarEvento = ({ commit, dispatch }, payload) => {
  requisicaoAutorizada
    .post(`${BASE_URL}/eventos`, payload)
    .then((resp) => {
      commit(types.CRIAR_EVENTO, resp.data.data);
      dispatch('alert/success', 'Evento cadastrado com sucesso.', {
        root: true
      });
    })
    .catch(() => {
      dispatch('alert/error', 'Falha ao salvar evento.', { root: true });
    });
};

export const deletarEvento = ({ commit, dispatch }, eventoID) => {
  requisicaoAutorizada
    .delete(`${BASE_URL}/eventos/${eventoID}`)
    .then(() => {
      commit(types.DELETAR_EVENTO, eventoID);
      dispatch('alert/success', 'Evento excluido com sucesso!', { root: true });
    })
    .catch(() => {
      dispatch('alert/error', 'Falha ao deletar evento.', { root: true });
    });
};
export const setImage = ({ commit }, evento) => {
  commit(types.ATUALIZAR_EVENTO, evento);
};

export const atualizarEvento = ({ commit, dispatch }, evento) => {
  requisicaoAutorizada
    .patch(`${BASE_URL}/eventos/${evento.id}`, evento)
    .then(() => {
      commit(types.ATUALIZAR_EVENTO, evento);
      dispatch('alert/success', 'Evento atualizado com sucesso!', {
        root: true
      });
    })
    .catch(() => {
      dispatch('alert/error', 'Falha ao atualizar evento.', { root: true });
    });
};

export const obterEventosInstiuicao = ({ commit, dispatch }, id) => {
  requisicaoAutorizada
    .get(`${BASE_URL}/instituicoes/${id}/eventos`)
    .then((resp) => {
      commit(types.EVENTOS_INSTITUICAO, resp.data.data);
    })
    .catch(() => {
      dispatch('alert/error', 'Falha ao obter eventos.', { root: true });
    });
};
