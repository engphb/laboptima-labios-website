import { Router } from "express";
import https from "https";
import http from "http";

const lattesRouter = Router();

lattesRouter.get("/lattes-photo/:id", (req, res) => {
  const { id } = req.params;

  if (!/^\d+$/.test(id)) {
    res.status(400).json({ error: "ID inválido" });
    return;
  }

  const photoUrl = `https://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=${id}`;

  const request = https.get(photoUrl, (upstream) => {
    if (upstream.statusCode && upstream.statusCode >= 400) {
      res.status(404).json({ error: "Foto não encontrada" });
      upstream.resume();
      return;
    }

    const contentType = upstream.headers["content-type"] || "image/jpeg";
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=86400");
    upstream.pipe(res);
  });

  request.on("error", () => {
    if (!res.headersSent) {
      res.status(502).json({ error: "Erro ao buscar foto" });
    }
  });

  request.setTimeout(8000, () => {
    request.destroy();
    if (!res.headersSent) {
      res.status(504).json({ error: "Timeout ao buscar foto" });
    }
  });
});

export default lattesRouter;
