// This file was auto-generated. Please do not edit it.

import * as p5 from '....index';

declare module '....index' {
    class Geometry {
        /**
         *   p5 Geometry class
         *
         *   @param [detailX] number of vertices along the
         *   x-axis.
         *   @param [detailY] number of vertices along the
         *   y-axis.
         *   @param [callback] function to call upon object
         *   instantiation.
         */
        constructor(detailX?: number, detailY?: number, callback?: (...args: any[]) => any);

        /**
         *   Removes the internal colors of p5.Geometry. Using
         *   clearColors(), you can use fill() to supply new
         *   colors before drawing each shape. If clearColors()
         *   is not used, the shapes will use their internal
         *   colors by ignoring fill().
         */
        clearColors(): void;

        /**
         *   Flips the U texture coordinates of the model.
         */
        flipU(): Geometry;

        /**
         *   Flips the V texture coordinates of the model.
         */
        flipV(): Geometry;

        /**
         *   computes faces for geometry objects based on the
         *   vertices.
         *   @chainable
         */
        computeFaces(): Geometry;

        /**
         *   This function calculates normals for each face,
         *   where each vertex's normal is the average of the
         *   normals of all faces it's connected to. i.e
         *   computes smooth normals per vertex as an average
         *   of each face. When using FLAT shading, vertices
         *   are disconnected/duplicated i.e each face has its
         *   own copy of vertices. When using SMOOTH shading,
         *   vertices are connected/deduplicated i.e each face
         *   has its vertices shared with other faces.
         *
         *   Options can include:
         *
         *   - roundToPrecision: Precision value for rounding
         *   computations. Defaults to 3.
         *   @param [shadingType] shading type (FLAT for flat
         *   shading or SMOOTH for smooth shading) for
         *   buildGeometry() outputs. Defaults to FLAT.
         *   @param [options] An optional object with
         *   configuration.
         *   @chainable
         */
        computeNormals(shadingType?: string, options?: object): Geometry;

        /**
         *   Averages the vertex normals. Used in curved
         *   surfaces
         *   @chainable
         */
        averageNormals(): Geometry;

        /**
         *   Averages pole normals. Used in spherical
         *   primitives
         *   @chainable
         */
        averagePoleNormals(): Geometry;

        /**
         *   Modifies all vertices to be centered within the
         *   range -100 to 100.
         *   @chainable
         */
        normalize(): Geometry;
    }
}
