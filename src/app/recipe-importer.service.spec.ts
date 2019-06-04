import { TestBed } from '@angular/core/testing';

import { RecipeImporterService } from './recipe-importer.service';

describe('RecipeImporterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecipeImporterService = TestBed.get(RecipeImporterService);
    expect(service).toBeTruthy();
  });
});
