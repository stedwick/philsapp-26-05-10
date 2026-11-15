"""Trim water around the Atlas mesh. Run from the repository root with numpy and trimesh installed."""
import trimesh

model = trimesh.load('parallax/experiments/island-atlas-mesh/island.glb', force='scene')
mesh = next(iter(model.geometry.values())).copy()
centers = mesh.triangles_center
ellipse = ((centers[:, 0] + .3) / 4.3) ** 2 + ((centers[:, 2] + 10) / 3.0) ** 2
mesh.update_faces((centers[:, 1] > .13) & ((ellipse < 1) | (centers[:, 1] > .85)))
mesh.remove_unreferenced_vertices()
mesh.export('parallax/experiments/island-atlas-edited/island-edited.glb')
